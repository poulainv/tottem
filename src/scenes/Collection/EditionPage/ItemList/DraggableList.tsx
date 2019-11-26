import * as React from 'react'
import {
    DragDropContext,
    Draggable,
    Droppable,
    resetServerContext,
} from 'react-beautiful-dnd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import {
    ItemDetailFragment,
    ItemPreviewFragment,
} from '../../../../generated/types'
import EditableItem from './EditableItem'
import { useItemDragnDrop } from './hooks'

interface IDraggableListProps {
    collectionId: string
    items: Array<ItemPreviewFragment & ItemDetailFragment>
}

const DraggableList: React.FunctionComponent<IDraggableListProps> = ({
    items,
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
                        >
                            <TransitionGroup>
                                {items.map((item, index) => (
                                    <CSSTransition
                                        timeout={1000}
                                        classNames="fade"
                                        key={item.id}
                                    >
                                        <Draggable
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {draggable => (
                                                <EditableItem
                                                    key={item.id}
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
