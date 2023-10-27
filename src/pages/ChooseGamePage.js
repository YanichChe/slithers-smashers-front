import React from "react";
import '../styles/choose-game-page.css'
import InfoPanelComponent from "../components/choose-game/InfoPanelChooseComponent";
import GamesListComponent from "../components/choose-game/GamesListComponent";

const ChooseGamePage = () => {
    return (
        <div className='choose-game'>
            <InfoPanelComponent/>
            <GamesListComponent/>
        </div>

    );
};
export default ChooseGamePage;
