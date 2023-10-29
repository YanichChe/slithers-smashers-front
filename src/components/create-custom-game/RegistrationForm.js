import React, {useContext, useState} from "react";
import '../../styles/create-custom-game-page.css';
import ConfigService from "../../api/ConfigService";
import {gameNameContext} from "../../stores/GameNameStore";
import {observer} from "mobx-react";

const RegistrationForm = observer(() => {

    const [gameName, setGameName] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [port, setPort] = useState('');

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [foodStatic, setFoodStatic] = useState('');
    const [stateDelayMs, setDelayMs] = useState('');
    const [username, setUsername] = useState('');

    const [gameNameError, setGameNameError] = useState('');
    const [ipAddressError, setIpAddressError] = useState('');
    const [portError, setPortError] = useState('');

    const [heightError, setHeightError] = useState('');
    const [widthError, setWidthError] = useState('');
    const [foodStaticError, setFoodStaticError] = useState('');
    const [stateDelayMsError, setDelayMsError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const store = useContext(gameNameContext);

    const handleChange = (event, setStateFunction) => {
        const inputValue = event.target.value;
        setStateFunction(inputValue);
    };


    const submituserRegistrationForm = (e) => {
        e.preventDefault();
        store.setGameName(gameName);
        ConfigService.sendStartPost(height, width, foodStatic, stateDelayMs, gameName, username, ipAddress, port)
            .then(() => {
                window.location.assign('http://localhost:3000/game');
            })
            .catch((error) => {
                console.error('Ошибка:', error);
                setGameName('');
                setIpAddress('');
                setPort('');
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

                    <label>Ip Address:</label>
                    <input
                        type="text"
                        value={ipAddress}
                        onChange={(event) => handleChange(event, setIpAddress)}
                    />
                    <div className="errorMsg">{ipAddressError}</div>

                    <label>Port:</label>
                    <input
                        type="number"
                        value={port}
                        onChange={(event) => handleChange(event, setPort)}
                    />

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

                    <label>Delay ms:</label>
                    <input
                        type="number"
                        value={stateDelayMs}
                        onChange={(event) => handleChange(event, setDelayMs)}
                    />
                    <div className="errorMsg">{stateDelayMsError}</div>

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
