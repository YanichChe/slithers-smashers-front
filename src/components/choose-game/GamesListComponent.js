import React, { useContext, useEffect, useState } from "react";
import '../../styles/choose-game-page.css'
import ConfigService from "../../api/ConfigService";
import { chooseGameNameContext } from "../../stores/ChooseGameNameStore";

const GamesListComponent = () => {
    const [gamesFromResponse, setGamesFromResponse] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const storeChooseGameName = useContext(chooseGameNameContext);

    useEffect(() => {
        const interval = setInterval(() => {
            ConfigService.getGamesList()
                .then(response => {
                    const { gamesName } = response.data;
                    if (Array.isArray(gamesName) && gamesName.length > 0) {
                        setGamesFromResponse(gamesName)
                    }
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleClick = (event, gameName) => {
        event.preventDefault();
        storeChooseGameName.setChooseGameName(gameName);
        setActiveItem(gameName);
        console.log(activeItem);
    };

    return (
        <div className="scrollableContainer">
            <ul className="list">
                {gamesFromResponse.map((gameName, index) => (
                    <li
                        className={`item ${activeItem === gameName ? ':active' : ''}`}
                        onClick={(e) => handleClick(e, gameName)}
                        key={index}
                    >
                        <div>
                            <h1 className='game-name'>{gameName}</h1>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GamesListComponent;
