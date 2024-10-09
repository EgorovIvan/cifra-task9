import React, {useRef, useState} from 'react';
// import { useDrag } from 'react-dnd';
import { useStore } from '../store/useDragStore';

const DraggableBlock: React.FC = () => {
    const { positionY, setPositionY } = useStore();
    const ref = useRef()

    const [dragging, setDragging] = useState(false);
    const [color, setColor] = useState('gray');

    const handleDragStart = () => {
        setDragging(true);
    };

    const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
        const newY = event.clientY;
        const windowHeight = window.innerHeight;

        if (newY >= 0 && newY <= windowHeight) {
            setPositionY(newY);

            // Изменение цвета в зависимости от положения
            if (newY <= 50) {
                setColor('red');
            } else if (newY >= 150) {
                setColor('green');
            } else {
                setColor('gray');
            }
        }
        console.log(window.innerHeight)
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    return (
        <div
            className="draggable-block"
            style={{
                top: `${positionY}px`,
                backgroundColor: color,
            }}

            draggable={true}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
        >
            <span>Drag me</span>
        </div>
    );
};

export default DraggableBlock;
