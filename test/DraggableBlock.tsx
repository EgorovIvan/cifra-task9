import React, {useState} from 'react'
// import { useDrag, useDrop } from "react-dnd";
// import {TouchBackend} from 'react-dnd-touch-backend'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd'
import {useStore} from '../src/store/useBoxStore'
import {Card} from "./Card"
import {Container} from "./Container";


interface Props {
    height: number | undefined;
}


const DraggableBlock: React.FC<Props> = ({height}) => {
    const options = {
        scrollAngleRanges: [
            {start: 30, end: 150},
            {start: 210, end: 330}
        ]
    }

    const {positionY, setPositionY} = useStore();

    const [dragging, setDragging] = useState<boolean>(false);
    const [color, setColor] = useState<string>('gray');

    const handleDragStart = () => {
        setDragging(true);
    };

    const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
        const newY = event.clientY;
        // const windowHeight = window.innerHeight;
        const windowHeight = window.innerHeight;

        const minHeight = (height ? height * 0.2 : 0)
        const maxHeight = (height ? height * 0.8 : 0)

        if (newY >= 0 && newY <= (height ? height : 200)) {
            setPositionY(newY);

            // Изменение цвета в зависимости от положения
            if (newY <= minHeight) {
                setColor('red');
                // setPositionY(50)
            } else if (newY >= maxHeight) {
                setColor('green');
                // setPositionY(400)
            } else {
                setColor('gray');
            }
        }

    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    console.log(positionY)
    return (
        <DndProvider backend={HTML5Backend} options={options}>
                <Container/>
        </DndProvider>

    );
};

export default DraggableBlock;
