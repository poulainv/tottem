import { useApolloClient } from '@apollo/react-hooks'
import classNames from 'classnames'
import Router from 'next/router'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { StyledButton } from '../../../components/Button'
import {
    CheckUserSlugDocument,
    CheckUserSlugQuery,
    useGetSettingsQuery,
    useUpdateSettingsMutation,
} from '../../../generated/types'
import { auth0 } from '../../../services/authentication'
import Loading from '../../UtilsPage/Loading'
import { useStatusMessage } from '../components/TopBar'
import Avatar from './Avatar'

interface SettingsProps {
    authUserId: string
}

interface SettingsForm {
    firstname: string
    slug: string
    biography: string
}

const onLogout = () => {
    auth0.logout()
    Router.push('/')
}

export default ({ authUserId }: SettingsProps) => {
    const client = useApolloClient()
    const { dispatch } = useStatusMessage()
    const { data, loading } = useGetSettingsQuery({
        variables: {
            authUserId,
        },
    })

    const [updateSettings, { loading: isSaving }] = useUpdateSettingsMutation({
        onCompleted: () => dispatch('SAVED'),
    })

    const { register, handleSubmit, errors, watch } = useForm<SettingsForm>({
        mode: 'onBlur',
    })

    if (loading) {
        return <Loading />
    }

    const slugValidation = async (newSlug: string) => {
        if (newSlug === data?.user?.slug) {
            return Promise.resolve(true)
        } else {
            return !(await checkIfSlugExists(newSlug))
        }
    }

    const checkIfSlugExists = async (newSlug: string) => {
        const res = await client.query<CheckUserSlugQuery>({
            query: CheckUserSlugDocument,
            variables: { slug: newSlug },
        })

        return !!res.data.user?.id
    }

    const onSubmit = ({ slug, biography, firstname }: SettingsForm) => {
        dispatch('SAVING'),
            updateSettings({
                variables: {
                    slug,
                    authUserId,
                    biography,
                    firstname,
                },
            })
    }

    return (
        <div>
            <h1 className="text-2xl text-gray-900 leading-none">Settings</h1>
            <div className="max-w-xl mt-10">
                <Avatar
                    avatar={data?.user?.pictureUrl}
                    authUserId={authUserId}
                />
                <form
                    className="mt-4"
                    onSubmit={handleSubmit(onSubmit)}
                    onChange={() => dispatch('CHANGED')}
                >
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            ref={register({
                                minLength: {
                                    value: 2,
                                    message: 'More than 2 characters required',
                                },
                                maxLength: {
                                    value: 25,
                                    message: 'Less than 25 characters required',
                                },
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                },
                            })}
                            autoComplete="off"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="firstname"
                            type="text"
                            defaultValue={data?.user?.firstname}
                            placeholder="firstname"
                        />

                        <p className="text-gray-700 text-xs mt-1">
                            Your name will be used and displayed around Tottem
                        </p>
                        <p className="text-red-600 mt-1">
                            {errors?.firstname?.message}
                        </p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            ref={register({
                                pattern: {
                                    value: /^[a-z0-9_.-]{3,20}$/,
                                    message:
                                        'Username should have between 3 and 20 lowercase alphanumeric characters',
                                },
                                required: {
                                    value: true,
                                    message: 'Username is required',
                                },
                                validate: async value =>
                                    await slugValidation(value),
                            })}
                            autoComplete="off"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="slug"
                            type="text"
                            defaultValue={data?.user?.slug}
                            placeholder="slug"
                        />

                        <p className="text-gray-700 text-xs mt-1">
                            Unique identifier used especially to generate URLs.
                            Change only if necessary.
                        </p>

                        {errors.slug?.type === 'required' && (
                            <p className="text-red-600 mt-1">
                                {errors.slug.message}
                            </p>
                        )}
                        {errors.slug?.type === 'pattern' && (
                            <p className="text-red-600 mt-1">
                                {errors.slug.message}
                            </p>
                        )}
                        {errors.slug?.type === 'validate' && (
                            <p className="text-red-600 mt-1">
                                Sorry, this username is already taken
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Biography
                        </label>
                        <textarea
                            ref={register({
                                maxLength: {
                                    value: 300,
                                    message: 'Max characters 300',
                                },
                            })}
                            defaultValue={data?.user?.biography}
                            className="shadow min-h-8 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="biography"
                            placeholder="Tell a bit about you"
                        />
                        <div
                            className={classNames(
                                'text-right mt-2 text-gray-800',
                                {
                                    'text-red-600 font-semibold':
                                        errors?.biography?.type === 'maxLength',
                                }
                            )}
                        >
                            Left:{' '}
                            {300 -
                                (watch('biography')?.length ??
                                    data?.user?.biography?.length ??
                                    0)}
                            /300 characters
                        </div>
                    </div>
                    <div className="flex justify-between mt-16">
                        <StyledButton type="submit">
                            {isSaving ? 'Saving...' : 'Save'}
                        </StyledButton>
                        <StyledButton
                            onClick={onLogout}
                            primary={false}
                            type="submit"
                        >
                            Logout
                        </StyledButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
