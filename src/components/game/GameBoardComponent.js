import React, {useEffect, useState} from 'react';
import ConfigService from "../../api/ConfigService";

function GameBoardComponent({n, m}) {
    const [coordsFromResponse, setCoordsFromResponse] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            ConfigService.getGameState()
                .then(response => {
                    const {snakeList} = response.data;
                    if (Array.isArray(snakeList) && snakeList.length > 0) {
                        console.log(snakeList);
                        const apiCoords = snakeList.map(snake => snake.coordList).flat();
                        console.log(apiCoords);
                        setCoordsFromResponse(apiCoords);
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

    const height = 80 + 'vh';
    const squareSize = 80 / m;
    const width = n * squareSize + 'vh';

    const squares = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const uniqueId = i * n + j;
            const isColored = coordsFromResponse.some(coord => coord.x === j && coord.y === i);
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
                        backgroundColor: isColored ? '#FF5733' : 'white',
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
