import React, {useContext, useState} from "react";
import '../../styles/get-started-page.css'
import {gamePlayerNameContext} from "../../stores/GamePlayerNameStore";
import {chooseGameNameContext} from "../../stores/ChooseGameNameStore";
import ConfigService from "../../api/ConfigService";

const InputComponent = () => {

    const gamePlayerNameStore = useContext(gamePlayerNameContext);
    const chooseGameNameStore = useContext(chooseGameNameContext);

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };


    const handleClick = () => {
        gamePlayerNameStore.setGamePlayerName(value);
        ConfigService.sendJoinMessage(gamePlayerNameStore.getGamePlayerName(), chooseGameNameStore.getChooseGameName())
        window.location.assign('http://localhost:3000/game');
    }

    return (
        <div className='form-group'>
            <div>
                <p className='description-input'>
                    Ready to enter the mesmerizing world of snake games? Sign up now and unleash your inner snake
                    charmer. Conquer the leaderboards and forge your slithering legacy!
                </p>
            </div>
            <input onChange={handleChange}
                   className='input-field' placeholder="Type your username here"
                   type='text'></input>
            <button className='button_start' onClick={handleClick}>START</button>
        </div>
    );
};

export default InputComponent;