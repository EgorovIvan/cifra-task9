import type { CSSProperties, FC, ReactNode } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../src/types/ItemTypes'

export interface BoxProps {
    id: any
    left: number
    top: number
    hideSourceOnDrag?: boolean
    children?: ReactNode
}

export const Box: FC<BoxProps> = ({
                                      id,
                                      left,
                                      top,
                                      hideSourceOnDrag,
                                      children,
                                  }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: { id, left, top },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top],
    )

    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }
    return (
        <div
            className="extra"
            ref={drag}
            style={{ left, top }}
            data-testid="box"
        >
            {children}
        </div>
    )
}
