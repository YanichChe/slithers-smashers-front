import React from "react";
import '../../styles/home-page.css'

const ButtonsComponent = ({chooseGameRef}) => {

    const scroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className='button_container'>
            <button className='button_choose_game' onClick= {()=>{scroll(chooseGameRef.current)}}>Choose Game</button>
            <button className='button_create_custom'>Create Custom</button>
        </div>

    );
};

export default ButtonsComponent;
