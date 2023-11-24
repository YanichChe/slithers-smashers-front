import React from "react";
import '../styles/game-page.css'
import GameBoardComponent from "../components/game/GameBoardComponent";
import TitleGameComponent from "../components/game/TitleGameComponent";
import ConfigService from "../api/ConfigService";
import PlayersTable from "../components/game/PlayersTable";

const GamePage = () => {

    const n = 40; // ширина в клетках
    const m = 20; // высота в клетках

    window.addEventListener("keydown", moveRect);

    function moveRect(e) {
        switch (e.key) {

            case "ArrowLeft":
                ConfigService.sentHeadDirection(1)
                    .then(response => {

                    })
                    .catch(error => {
                        console.error('Ошибка при получении данных:', error);
                    });
                break;
            case "ArrowUp":
                ConfigService.sentHeadDirection(0)
                    .then(response => {

                    })
                    .catch(error => {
                        console.error('Ошибка при получении данных:', error);
                    });
                break;
            case "ArrowRight":
                ConfigService.sentHeadDirection(2)
                    .then(response => {

                    })
                    .catch(error => {
                        console.error('Ошибка при получении данных:', error);
                    });
                break;
            case "ArrowDown":
                ConfigService.sentHeadDirection(3)
                    .then(response => {

                    })
                    .catch(error => {
                        console.error('Ошибка при получении данных:', error);
                    });
                break;
        }
    }

    return (
        <div className='game'>
            <TitleGameComponent/>
            <GameBoardComponent m={m} n={n} />
            <PlayersTable />
        </div>

    );
};

export default GamePage;
