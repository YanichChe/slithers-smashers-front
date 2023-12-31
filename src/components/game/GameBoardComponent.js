import React, {useContext, useEffect, useState} from 'react';
import ConfigService from "../../api/ConfigService";
import appleImage from "../../images/apple.png"
import FailStatusMessage from "./FaiStatuslMessage";
import {gameNameContext} from "../../stores/GameNameStore";

function GameBoardComponent({n, m}) {
    const [coordsFromResponse, setCoordsFromResponse] = useState([]);
    const [foodsCoordFromResponse, setFoodsCordFromResponse] = useState([]);
    const [isAliveFromResponse, setIsAliveFromResponse] = useState(true);
    const [scoreFromResponse, setScoreFromResponse] = useState(0);
    const store = useContext(gameNameContext);

    useEffect(() => {
        let id;
        if (isAliveFromResponse) {
            id = setInterval(() => {
                ConfigService.getGameState()
                    .then(response => {
                        const {snakeList} = response.data;
                        const {foods} = response.data;
                        const {alive} = response.data;
                        const {score} = response.data;
                        if (Array.isArray(snakeList)) {
                            const apiCoords = snakeList.map(snake => snake.coordList).flat();
                            setCoordsFromResponse(apiCoords);
                        }
                        if (Array.isArray(foods)) {
                            setFoodsCordFromResponse(foods);
                        }
                        setIsAliveFromResponse(alive);
                        setScoreFromResponse(score);
                        if (!isAliveFromResponse) {
                            clearInterval(id); // Очистить интервал, если игрок больше не жив
                            store.setGameName("You lose");
                        }

                    })
                    .catch(error => {
                        console.error('Ошибка при получении данных:', error);
                    });
            }, 300);

        } else {

            store.setGameName("You lose")
        }
    }, [isAliveFromResponse]);


    const height = 80 + 'vh';
    const squareSize = 80 / m;
    const width = n * squareSize + 'vh';

    const squares = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const uniqueId = i * n + j;
            const isColored = coordsFromResponse.some(coord => coord.x === j && coord.y === i);
            const isFood = foodsCoordFromResponse.some(coord => coord.x === j && coord.y === i);

            let backgroundStyle = {};

            if (true) {
                backgroundStyle = {
                    backgroundColor: '#A2D149',
                };
            }

            if (isColored) {
                backgroundStyle = {
                    backgroundColor: '#4674E9',
                };
            }

            if (isFood) {
                const foodImagePath = './red.jpg';
                backgroundStyle = {
                    backgroundColor: '#A2D149',
                    backgroundImage: `url(${appleImage})`,
                    backgroundSize: 'cover',
                    width: squareSize + 'vh',
                    height: squareSize + 'vh',
                };
            }


            squares.push(
                <div
                    key={uniqueId}
                    style={{
                        width: squareSize + 'vh',
                        height: squareSize + 'vh',
                        border: '1px solid #5a32b4',
                        boxSizing: 'border-box',
                        paddingBottom: squareSize,
                        display: 'inline-block',
                        margin: 0,
                        padding: 0,
                        ...backgroundStyle,
                    }}
                />
            );
        }
    }

    return (
        <div style={{width, height}} className='board'>
            {isAliveFromResponse ? squares : <FailStatusMessage points={scoreFromResponse}/>}
        </div>
    );
}

export default GameBoardComponent;
