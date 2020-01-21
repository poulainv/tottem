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

interface SettingsProps {
    authUserId: string
}

interface SettingsForm {
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

    const [updateSettings] = useUpdateSettingsMutation({
        onCompleted: () => dispatch('SAVED'),
    })

    const { register, handleSubmit, errors, watch } = useForm<SettingsForm>()

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

    const onSubmit = ({ slug, biography }: SettingsForm) => {
        dispatch('SAVING'),
            updateSettings({
                variables: {
                    slug,
                    authUserId,
                    biography,
                },
            })
    }

    return (
        <div>
            <h1 className="text-2xl text-gray-900 leading-none">Settings</h1>
            <form
                className="max-w-xl mt-10"
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => dispatch('CHANGED')}
            >
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        ref={register({
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

                    {errors.slug?.type === 'required' && (
                        <p className="text-red-600">{errors.slug.message}</p>
                    )}
                    {errors.slug?.type === 'validate' && (
                        <p className="text-red-600">
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
                        className={classNames('text-right mt-2', {
                            'text-red-600 font-semibold':
                                errors?.biography?.type === 'maxLength',
                        })}
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
                    <StyledButton type="submit">Save</StyledButton>
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
    )
}
