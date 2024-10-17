import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Box from "./components/Box";

const App: React.FC = () => {

    return (
        <>
            <div className="app">

                <Header/>
                <Main/>
                <Box/>

            </div>
        </>
    );
};

export default App;
