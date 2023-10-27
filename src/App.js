import React, { useRef } from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import ChooseGamePage from "./pages/ChooseGamePage";
import GetStartedPage from "./pages/GetStartedPage";

function App() {

    const chooseGameRef = useRef(null);

    return (
        <div className='app-container'>
            <div className="content">
                <HomePage chooseGameRef={chooseGameRef}/>
                <ChooseGamePage chooseGameRef={chooseGameRef}/>
                <GetStartedPage/>
            </div>
        </div>
    );
}

export default App;
