import React, {useContext, useState} from "react";
import '../../styles/create-custom-game-page.css';
import ConfigService from "../../api/ConfigService";
import {gameNameStore} from "../../stores/GameNameStore";
import {observer} from "mobx-react";
import {GameSettingsContext} from "../../stores/GameSettingsStore";

const RegistrationForm = observer(() => {

    const [gameName, setGameName] = useState('');

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [foodStatic, setFoodStatic] = useState('');
    const [username, setUsername] = useState('');

    const [gameNameError, setGameNameError] = useState('');

    const [heightError, setHeightError] = useState('');
    const [widthError, setWidthError] = useState('');
    const [foodStaticError, setFoodStaticError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const gameSettingsStore = useContext(GameSettingsContext);

    const handleChange = (event, setStateFunction) => {
        const inputValue = event.target.value;
        setStateFunction(inputValue);
    };

    const submituserRegistrationForm = (e) => {
        e.preventDefault();

        gameNameStore.setGameName(gameName);
        gameSettingsStore.setN(width);
        gameSettingsStore.setM(height);
        ConfigService.sendStartPost(height, width, foodStatic, gameName, username)
            .then(() => {
                window.location.assign('http://localhost:3000/game');
            })
            .catch((error) => {
                console.error('Ошибка:', error);
                setGameName('');
            });
    }

    return (
        <div id="main-registration-container">
            <div id="register">
                <form
                    name="userRegistrationForm"
                    onSubmit={submituserRegistrationForm}
                >
                    <label>Game name</label>
                    <input
                        type="text"
                        value={gameName}
                        onChange={(event) => handleChange(event, setGameName)}
                    />
                    <div className="errorMsg">{gameNameError}</div>

                    <label>Height:</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(event) => handleChange(event, setHeight)}
                    />
                    <div className="errorMsg">{heightError}</div>

                    <label>Width:</label>
                    <input
                        type="number"
                        value={width}
                        onChange={(event) => handleChange(event, setWidth)}
                    />
                    <div className="errorMsg">{widthError}</div>

                    <label>Food static:</label>
                    <input
                        type="number"
                        value={foodStatic}
                        onChange={(event) => handleChange(event, setFoodStatic)}
                    />
                    <div className="errorMsg">{foodStaticError}</div>

                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => handleChange(event, setUsername)}
                    />
                    <div className="errorMsg">{usernameError}</div>

                    <input type="submit" className="button" value="Register"/>
                </form>
            </div>
        </div>
    );
});
export default RegistrationForm;
