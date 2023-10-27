import React from "react";
import '../styles/game-page.css'
import GameBoardComponent from "../components/game/GameBoardComponent";
import TitleGameComponent from "../components/game/TitleGameComponent";

const GamePage = () => {

    const n = 40; // ширина в клетках
    const m = 20; // высота в клетках

    return (
        <div className='game'>
            <TitleGameComponent/>
            <GameBoardComponent m={m} n={n}/>
        </div>

    );
};

export default GamePage;
