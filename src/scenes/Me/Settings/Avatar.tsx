import { useState } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import {
    SignS3Document,
    SignS3Mutation,
    useUpdateAvatarMutation,
} from '../../../generated/types'
import { sendMessage } from '../../../services/errors'
import { StyledButton } from '../../../components/Button'
import { RcFile } from 'antd/lib/upload'
import { useApolloClient } from '@apollo/react-hooks'

function beforeUpload(file: RcFile) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        sendMessage('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 1
    if (!isLt2M) {
        sendMessage('Image must smaller than 1MB!')
    }
    return isJpgOrPng && isLt2M
}

export interface AvatarProps {
    className?: string
    avatar?: string
    authUserId: string
}

const formatFilename = (filename: string) => {
    const randomString = Math.random()
        .toString(36)
        .substring(2, 7)
    const cleanFileName = filename.toLowerCase()
    const newFilename = `avatar/${randomString}-${cleanFileName}`
    return newFilename.substring(0, 60)
}

export default ({ className, avatar, authUserId }: AvatarProps) => {
    const [s3Files, setS3Files] = useState()
    const [loading, setLoading] = useState(false)
    const client = useApolloClient()
    const [updateAvatar] = useUpdateAvatarMutation({
        onCompleted: () => setLoading(false),
    })

    const submitFile = async (event: any) => {
        event.preventDefault()
        const file = s3Files[0]

        if (!beforeUpload(file)) {
            return
        }

        setLoading(true)
        const { data } = await client.mutate<SignS3Mutation>({
            mutation: SignS3Document,
            variables: {
                fileName: formatFilename(file.name),
                fileType: file.type,
            },
        })

        if (data === undefined || data === null) {
            sendMessage('Unabled to upload your image')
            setLoading(false)
            return
        }

        const { signedRequest, url } = data.signS3
        try {
            const res = await axios.put(signedRequest, file, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            if (res.status === 200) {
                updateAvatar({
                    variables: { authUserId, pictureUrl: url },
                })
            } else {
                setLoading(false)
                sendMessage('Unabled to upload your image')
            }
        } catch (e) {
            setLoading(false)
            sendMessage('Unabled to upload your image')
        }
    }

    const handleFileUpload = (event: any) => {
        setS3Files(event.target.files)
    }

    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Avatar
            </label>
            <img className="h-20 w-20 rounded object-cover" src={avatar} />
            <form
                onSubmit={submitFile}
                className="flex justify-between mt-4 appearance-none items-center"
            >
                <input
                    type="file"
                    onChange={handleFileUpload}
                    className="appearance-none"
                />
                <StyledButton
                    className={classNames({
                        invisible: !s3Files,
                        visible: s3Files,
                    })}
                    primary={false}
                    type="submit"
                >
                    {loading ? 'Processing...' : 'Upload'}
                </StyledButton>
            </form>
        </div>
    )
}
