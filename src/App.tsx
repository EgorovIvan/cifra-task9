import * as React from 'react';
import {useEffect, useRef} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Box from "./components/Box";
import {useAppStore} from "./store/useAppStore";

const App: React.FC = () => {
    const {appHeight, setAppHeight} = useAppStore();
    const appRef = useRef<HTMLDivElement>(null)
    const height = appRef.current?.getBoundingClientRect().height;
    console.log(height)
    useEffect(() => {

        setAppHeight(height ? height : 0)
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setAppHeight(height ? height : 0)
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [appHeight]);


    console.log(appHeight)

    return (
        <div className="app" ref={appRef}>
            {/*<Header />*/}
            {/*<Main/>*/}
            <Box/>
                {/*<DraggableBlock height={height}/>*/}
            {/*{isUserListOpen && <Extra />}*/}
        </div>
    );
};

export default App;
