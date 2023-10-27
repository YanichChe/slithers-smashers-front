import React from "react";
import '../../styles/create-custom-game-page.css'

const TitleComponent = () => {

    return (
        <div className='title_'>CREATE CUSTOM GAME
            <div>
                <p className='description-input_'>
                    Enter the values required for the game!
                    Before this, you need to start the server and copy the address and port value from there. Don't
                    forget to include the name of your game!
                </p>
            </div>
        </div>
    );
};

export default TitleComponent;