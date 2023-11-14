import React, {useEffect, useState} from 'react';
import ConfigService from "../../api/ConfigService";
import redImg from "../../images/apple.jpg"

function GameBoardComponent({n, m}) {
    const [coordsFromResponse, setCoordsFromResponse] = useState([]);
    const [foodsCoordFromResponse, setFoodsCordFromResponse] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            ConfigService.getGameState()
                .then(response => {
                    const {snakeList} = response.data;
                    const {foods} = response.data;
                    if (Array.isArray(snakeList) && snakeList.length > 0) {
                        const apiCoords = snakeList.map(snake => snake.coordList).flat();
                        setCoordsFromResponse(apiCoords);
                        console.log('snake' + apiCoords)
                    }
                    if (Array.isArray(foods) && foods.length > 0) {
                        setFoodsCordFromResponse(foods);
                        console.log('food ' + foods.x)
                    }

                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
        }, 300);

        return () => {
            clearInterval(interval);
        };
    }, []);

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
                    backgroundColor: 'white',
                };
            }

            if (isColored) {
                backgroundStyle = {
                    backgroundColor: '#FF5733',
                };
            }

            if (isFood) {
                const foodImagePath = './red.jpg';
                backgroundStyle = {
                    backgroundImage: `url(${redImg})`,
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
            {squares}
        </div>
    );
}

export default GameBoardComponent;
