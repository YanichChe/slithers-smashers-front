import React, {useEffect, useState} from "react";
import '../../styles/choose-game-page.css'
import ConfigService from "../../api/ConfigService";

const GamesListComponent = () => {
    const [gamesFromResponse, setGamesFromResponse] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            ConfigService.getGameState()
                .then(response => {
                    const {gamesName} = response.data;
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

    return (
        <div className="scrollableContainer">
            <ul className="list">
                {gamesFromResponse.map((gameName, index) => (
                    <li className="item" key={index}>
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
