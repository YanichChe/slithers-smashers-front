import React, {useState} from 'react';

function GameBoardComponent({n, m}) {


    const height = 80 + 'vh';

    const squareSize = 80 / m;

    const width = n * squareSize + 'vh'

    const squares = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const uniqueId = i * n + j;
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
                        margin:0,
                        padding:0
                    }}
                >

                </div>
            );
        }
    }
    return (
        <div style={{ width, height }} className='board'>
            {squares}
        </div>
    );
}

export default GameBoardComponent