import { Box } from 'grommet'
import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'
import { grey1000 } from '../../../../constants/colors'
import { CollectionBasicFragment } from '../../../../generated/types'
import { useCollectionForm } from './hooks'

const CollectionForm = styled.form`
    display: flex;
    flex-direction: column;
`

const CollectionNameInput = styled(TextareaAutosize)`
    background-color: inherit;
    border: none;
    resize: none;

    :focus {
        outline: none;
    }

    margin: 0px;
    font-weight: 600;
    font-size: 28px;
    line-height: 48px;
    color: ${grey1000};

    @media screen and (max-width: 812px) {
        font-size: 20px;
        line-height: 26px;
    }
`

const CollectionDetailInput = styled(TextareaAutosize)`
    background-color: inherit;
    border: none;
    resize: none;

    :focus {
        outline: none;
    }
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    margin-top: 16px;

    @media screen and (max-width: 812px) {
        font-size: 14px;
        line-height: 22px;
    }
`

export interface FormOptions {
    initialCollection?: CollectionBasicFragment
    sectionId?: string
    profile?: string
    onChange?: () => void
    onSaved?: (collectionId: string) => void
    onSaving?: () => void
}

export default ({
    initialCollection,
    sectionId,
    profile,
    onSaved,
    onSaving,
    onChange,
}: FormOptions) => {
    const { onFormChange, register } = useCollectionForm(
        initialCollection,
        sectionId,
        profile,
        onSaved,
        onSaving
    )

    return (
        <Box onChange={onChange} pad={{ horizontal: 'large' }}>
            <CollectionForm id="collection-form" onChange={onFormChange}>
                <CollectionNameInput
                    name="name"
                    inputRef={register}
                    placeholder="Titre"
                    autoFocus={true}
                />
                <CollectionDetailInput
                    name="detail"
                    minRows={2}
                    inputRef={register}
                    placeholder="Quelques détails sur la nouvelle collection..."
                />
            </CollectionForm>
        </Box>
    )
}
