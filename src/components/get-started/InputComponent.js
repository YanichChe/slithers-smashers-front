import React from "react";
import '../../styles/get-started-page.css'

const InputComponent = () => {

    return (
        <div className='form-group'>
            <div>
                <p className='description-input'>
                    Ready to enter the mesmerizing world of snake games? Sign up now and unleash your inner snake
                    charmer. Conquer the leaderboards and forge your slithering legacy!
                </p>
            </div>
            <input className='input-field' placeholder="Type your username here" type='text'></input>
            <button className='button_start'>START</button>
        </div>
    );
};

export default InputComponent;