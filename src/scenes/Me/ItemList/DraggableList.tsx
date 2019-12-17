import * as React from 'react'
import {
    DragDropContext,
    Draggable,
    Droppable,
    resetServerContext,
} from 'react-beautiful-dnd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {
    ItemDetailFragment,
    ItemPreviewFragment,
} from '../../../generated/types'
import DraggableItem from './DraggableItem'
import { useItemDragnDrop } from './hooks'

interface IDraggableListProps {
    collectionId: string
    items: Array<ItemPreviewFragment & ItemDetailFragment>
    className?: string
}

const DraggableList: React.FunctionComponent<IDraggableListProps> = ({
    items,
    className,
    collectionId,
}) => {
    resetServerContext()
    const { onDragEnd } = useItemDragnDrop({ items, collectionId })
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <TransitionGroup>
                <Droppable droppableId="list">
                    {provided => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={className}
                        >
                            <TransitionGroup>
                                {items.map((item, index) => (
                                    <CSSTransition
                                        timeout={{ exit: 200, appear: 200 }}
                                        classNames="fade"
                                        key={item.id}
                                    >
                                        <Draggable
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {draggable => (
                                                <DraggableItem
                                                    key={item.id}
                                                    className="mt-4 first::mt-2 cursor-auto"
                                                    innerRef={
                                                        draggable.innerRef
                                                    }
                                                    {...draggable.draggableProps}
                                                    {...draggable.dragHandleProps}
                                                    item={item}
                                                />
                                            )}
                                        </Draggable>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </TransitionGroup>
        </DragDropContext>
    )
}

export default DraggableList
