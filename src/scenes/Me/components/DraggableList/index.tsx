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
import { ModificationTrackActions } from '../../../common'
import DraggableItem from './DraggableItem'

interface IDraggableListProps {
    items: Array<ItemPreviewFragment & ItemDetailFragment>
    className?: string
    dndEnabled?: boolean
    onDragEnd?: (result: any) => void
}

const DraggableList: React.FunctionComponent<IDraggableListProps &
    ModificationTrackActions> = ({
    items,
    className,
    onChange,
    onSaved,
    onSaving,
    onDragEnd = () => 1,
    dndEnabled = true,
}) => {
    resetServerContext()
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
                                        timeout={{ exit: 200, enter: 200 }}
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
                                                    innerRef={
                                                        draggable.innerRef
                                                    }
                                                    {...draggable.draggableProps}
                                                    {...draggable.dragHandleProps}
                                                    item={item}
                                                    onChange={onChange}
                                                    onSaved={onSaved}
                                                    onSaving={onSaving}
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
