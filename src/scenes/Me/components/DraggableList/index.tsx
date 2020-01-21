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
} from '../../../../generated/types'
import DraggableItem from './DraggableItem'

interface IDraggableListProps {
    items: Array<ItemPreviewFragment & ItemDetailFragment>
    className?: string
    dndEnabled?: boolean
    onDragEnd?: (result: any) => void
}

const DraggableList: React.FunctionComponent<IDraggableListProps> = ({
    items,
    className,
    onDragEnd = () => 1,
    dndEnabled = true,
}) => {
    resetServerContext()
    return (
        <DragDropContext onDragEnd={onDragEnd}>
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
                                    timeout={{ exit: 300, enter: 300 }}
                                    classNames="fade"
                                    key={item.id}
                                >
                                    <Draggable
                                        isDragDisabled={!dndEnabled}
                                        draggableId={item.id}
                                        index={index}
                                    >
                                        {draggable => (
                                            <DraggableItem
                                                dndEnabled={dndEnabled}
                                                key={item.id}
                                                className="mt-4 first:mt-2 cursor-auto"
                                                innerRef={draggable.innerRef}
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
        </DragDropContext>
    )
}

export default DraggableList
