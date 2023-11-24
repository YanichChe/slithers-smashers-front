import React, {useEffect, useState} from "react";
import ConfigService from "../../api/ConfigService";

const PlayersTable = () => {
    const [players, setPlayersFromResponse] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            ConfigService.getPlayersTable()
                .then(response => {
                    const {gamePlayerTable} = response.data;
                    const keyValueArray = Object.entries(gamePlayerTable);
                    setPlayersFromResponse(keyValueArray)
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
        }, 300);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="players-table">
            <ol start="1">
                {players.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <p>
                                <span>{cell}</span>
                            </p>
                        ))}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default PlayersTable;
