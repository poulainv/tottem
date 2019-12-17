import range from 'lodash.range'
import { useGetItemsQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import DraggableList from './DraggableList'
import { Facebook } from 'react-content-loader'

export default ({
    collectionId,
    className,
    filterTypes,
}: {
    collectionId: string
    className?: string
    filterTypes: ItemType[]
}) => {
    const { data, loading } = useGetItemsQuery({
        variables: {
            collectionId,
        },
    })
    if (data === undefined || data.items === null || loading) {
        return (
            <div>
                {range(4).map((i: number) => {
                    return <Facebook key={1} width={600} height={140} />
                })}
            </div>
        )
    } else {
        const items = data.items
            .filter(x => !x.isArchived)
            .filter(i => {
                return !filterTypes.length || filterTypes.includes(i.type)
            })
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            .sort((a, b) => a.position - b.position)
        return (
            <DraggableList
                items={items}
                collectionId={collectionId}
                className={className}
            />
        )
    }
}
