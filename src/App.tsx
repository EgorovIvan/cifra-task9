import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { useUserStore } from './store/userStore';
// import Extra from "./components/Extra";
import DraggableBlock from "./components/DraggableBlock";

const App: React.FC = () => {
    const { setUsers } = useUserStore();
    const [isUserListOpen, setUserListOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null)

    const toggleUserList = () => {
        setUserListOpen(!isUserListOpen);
    };

    const height = ref.current?.getBoundingClientRect().height;

    useEffect(() => {

        setUsers([
            { id: 1, name: 'User One' },
            { id: 2, name: 'User Two' },
            { id: 3, name: 'User Three' },
        ]);
    }, [setUsers]);
    console.log(height)
    return (
        <div className="app" ref={ref}>
                <Header />
                <Main toggleUserList={toggleUserList}/>
            <DraggableBlock />
            {/*{isUserListOpen && <Extra />}*/}
        </div>
    );
};

export default App;
