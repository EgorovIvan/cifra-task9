import type {FC} from 'react'
import {useState} from 'react'
import type {XYCoord} from 'react-dnd'
import {useDrop} from 'react-dnd'
import {Box} from './Box'
import type {DragItem} from '../src/interfaces/DragItem'
import {ItemTypes} from '../src/types/ItemTypes'

export interface BoxState {
    id: string
    top: number;
    left: number;
    title: string
}


export const Container: FC = () => {
    const [box, setBox] = useState<BoxState>({
        id: '2', top: 800, left: 0, title: 'Drag me around'
    },)

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
                // const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                setBox(prevState => ({ ...prevState, top: top}))
                return undefined
            },
        }),
        [setBox],
    )

    return (
        <div ref={drop} className={'draggable-block'}>

            <Box
                id={box.id}
                left={box.left}
                top={box.top}
                hideSourceOnDrag={true}
            >
                {box.title}
            </Box>

        </div>
    )
}
