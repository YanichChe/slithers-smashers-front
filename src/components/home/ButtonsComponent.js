import React from "react";
import '../../styles/home-page.css'

const ButtonsComponent = () => {

    const scroll = (ref) => {

    }

    const moveToNewPage = () => {
        window.location.assign('http://localhost:3000/create-custom-game');
    }

    return (
        <div className='button_container'>
            <button className='button_choose_game' onClick={() => {

            }}>Choose Game
            </button>
            <button className='button_create_custom' onClick={moveToNewPage}>Create Custom
            </button>
        </div>

    );
};

export default ButtonsComponent;
