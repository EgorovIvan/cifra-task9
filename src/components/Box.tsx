import React, { useRef, useState } from 'react';
import { useBoxStore } from '../store/useBoxStore';
import {useAppStore} from "../store/useAppStore";

const Box: React.FC = () => {
    const { yPosition, setYPosition } = useBoxStore();
    const {appHeight} = useAppStore();
    const [isDragging, setIsDragging] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !boxRef.current) return;

        const newYPosition = e.clientY - boxRef.current.offsetHeight * 2 ;
        setYPosition(newYPosition);
    };

    const handleMouseUp = (e: MouseEvent) => {
        setIsDragging(false);
        console.log(e.clientY)
        if (e.clientY < 100) {
            setYPosition(50);
        } else if (e.clientY > 400) {
            setYPosition(appHeight/2 );
        } else {
            setYPosition(200);
        }

    };

    // const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    //     const newY = event.clientY;
    //     const windowHeight = window.innerHeight;
    //
    //     if (newY >= 0 && newY <= windowHeight) {
    //         setPositionY(newY);
    //
    //         // Изменение цвета в зависимости от положения
    //         if (newY <= 50) {
    //             setColor('red');
    //         } else if (newY >= 150) {
    //             setColor('green');
    //         } else {
    //             setColor('gray');
    //         }
    //     }
    //     console.log(window.innerHeight)
    // };

    React.useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className="box"
            style={{ transform: `translateY(${yPosition}px)` }}
        >
            <div
                ref={boxRef}
                onMouseDown={handleMouseDown}
            >TEST</div>
        </div>
    );
};

export default Box;
