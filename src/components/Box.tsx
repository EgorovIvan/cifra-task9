import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {useBoxStore} from '../store/useBoxStore';

const Box: React.FC = () => {
    const {yPosition, appHeight, isTouchUp, setYPosition, setAppHeight, setIsTouchUp} = useBoxStore();
    const [isDragging, setIsDragging] = useState(false);
    const plateRef = useRef<HTMLDivElement>(null);


    const handleResize = () => {
        setAppHeight(window.innerHeight);
    };

    /* Обработка события при нажатии на экран */
    const handleTouchStart = () => {
        setIsTouchUp(false)
        setIsDragging(true);
    };


    /* Обработка события при переносе блока */
    const handleTouchMove = (e: TouchEvent) => {
        setIsTouchUp(false)
        if (!isDragging || !plateRef.current) return;

        const newYPosition = e.touches[0]?.clientY;

        if(newYPosition > 0) {
            setYPosition(newYPosition - 15);
        }

    };

    /* Обработка события при отпускании touch */
    const handleTouchUp = (e: TouchEvent) => {
        setIsTouchUp(true)
        const fixedPosition = e.changedTouches[0]?.clientY;

        if (fixedPosition < appHeight * 0.25) {
            setYPosition(0);
        } else if (fixedPosition > appHeight * 0.75) {
            setYPosition(appHeight + 10);
        } else {
            setYPosition(appHeight / 2);
        }
        setIsDragging(false);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize()
        setYPosition(appHeight);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [appHeight]);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchUp);
        } else {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchUp);
        }

        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchUp);
        };
    }, [isDragging]);

    return (
        <div
            className={`box ${ isTouchUp ? "box-animation": ''}`}
            style={{transform: `translateY(${yPosition}px)`, height: `${appHeight}px`}}
        >
            <div>

                <div
                    className={'box__plate'}
                    ref={plateRef}
                    onTouchStart={handleTouchStart}
                >
                </div>

                <div className="box__title">
                    FEATURED
                </div>

                <div className="box__products">
                    <div className="box__products-item">
                        <img src="./images/hrm4.webp" alt="product-1"/>
                        <div className="product__name">
                            HRM-Pro™
                        </div>
                        <div className="product__price">
                            $129
                        </div>
                    </div>
                    <div className="box__products-item">
                        <img src="./images/striker4.webp" alt="product-2"/>
                        <div className="product__name">
                            STRIKER™ Plus 4 Ice Fishing Bundle
                        </div>
                        <div className="product__price">
                            $249
                        </div>
                    </div>
                </div>
                <div className="box__title color-black">
                    WEARABLES
                </div>
                <div className="box__text">
                    Explore all of our wrist-worn devices for all ages, from fitness trackers to advanced smartwatches.
                </div>
            </div>

            <div className="box__func">
                <div className="play">
                    <div className="play__btn"></div>
                    <div className="play__title">Start</div>
                </div>
                <div className="info">
                    <div>
                        <div className="info__title">7.20 <span>km</span></div>
                        <div className="info__text">Distance</div>
                    </div>
                    <div>
                        <div className="info__title">453 <span>kcal</span></div>
                        <div className="info__text">Calories</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Box;
