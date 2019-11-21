import styled from 'styled-components'
import { StyledButton } from '../../../../components/Button'
import Spinner from '../../../../components/Spinner'
import {
    brand700,
    grey1000,
    grey200,
    grey400,
    red500,
} from '../../../../constants/colors'
import { useItemForm } from './hooks'
const ItemForm = styled.form`
    display: flex;
    position: relative;
    flex-direction: row;
    align-content: center;
    margin-top: 32px;
`

const URLInput = styled.input`
    background-color: white;
    border: 0px ${brand700} solid;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    :focus {
        outline: none;
    }

    :disabled {
        color: ${grey400};
        background-color: ${grey200};
    }

    width: 100%;
    margin: 0px;
    padding: 4px 8px 4px 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: ${grey1000};
`

const Loader = styled.span`
    top: 12px;
    left: -16px;
    position: absolute;
`

// which html tag ?
const ErrorMessage = styled.p`
    color: ${red500};
    font-size: 14px;
    font-weight: 500;
    height: 1em;
`

export default ({ collectionId }: { collectionId?: string }) => {
    const { register, onSubmit, loading, errors } = useItemForm(collectionId)
    return (
        <div style={{ padding: '0px 48px 0px 48px' }}>
            <ItemForm id="items-form" onSubmit={onSubmit}>
                {loading && (
                    <Loader>
                        <Spinner size={24} />
                    </Loader>
                )}
                <URLInput
                    name="url"
                    placeholder="https://"
                    ref={register({
                        required:
                            '🙏 HTTP ou HTTPS... mais au moins une URL 🙏',
                        pattern: {
                            value: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
                            message: '🙏 Seules les URLs sont acceptées 🙏',
                        },
                    })}
                    disabled={collectionId === undefined || loading === true}
                />
                <StyledButton style={{ marginLeft: '16px' }} primary>
                    Ajouter
                </StyledButton>
            </ItemForm>
            <ErrorMessage>{errors.url && errors.url.message}</ErrorMessage>
        </div>
    )
}
