import ItemList from '../../ItemList'
import { useGetItemsQuery } from '../../../../generated/types'
import { ContentBox } from '../../../../components/Layout'
import EditableItem from './EditableItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default ({ collectionId }: { collectionId?: string }) => {
    if (collectionId === undefined) {
        return <ItemList items={[]} />
    } else {
        const { data, loading } = useGetItemsQuery({
            variables: {
                collectionId,
            },
        })
        if (data === undefined || data.items === null || loading) {
            return <ItemList items={[]} />
        } else {
            const items = data.items
                .filter(x => !x.isArchived)
                .sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                )
            return (
                <ContentBox>
                    <TransitionGroup>
                        {items.map((item, index) => (
                            <CSSTransition
                                timeout={1000}
                                classNames="fade"
                                key={item.id}
                            >
                                <EditableItem key={index} item={item} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ContentBox>
            )
        }
    }
}
