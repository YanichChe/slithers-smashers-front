import React, {useState} from "react";
import '../../styles/create-custom-game-page.css';

const RegistrationForm = () => {

    const [gameName, setGameName] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [port, setPort] = useState('');

    const [gameNameError, setGameNameError] = useState('');
    const [ipAddressError, setIpAddressError] = useState('');
    const [portError, setPortError] = useState('');

    const handleChangeGameName = (event) => {
        const inputValue = event.target.value;
        setGameName(inputValue);
    };

    const handleChangeIpAddress = (event) => {
        const inputValue = event.target.value;
        setIpAddress(inputValue);
    };

    const handleChangePort = (event) => {
        const inputValue = event.target.value;
        setPort(inputValue)
    };


    const submituserRegistrationForm = (e) => {
        e.preventDefault();
        setGameName('');
        setIpAddress('');
        setPort('');
    }

    return (
        <div id="main-registration-container">
            <div id="register">
                <form
                    method="post"
                    name="userRegistrationForm"
                    onSubmit={submituserRegistrationForm}
                >
                    <label>Game name</label>
                    <input
                        type="text"
                        value={gameName}
                        onChange={handleChangeGameName}
                    />
                    <div className="errorMsg">{gameNameError}</div>

                    <label>Ip Address:</label>
                    <input
                        type="text"
                        value={ipAddress}
                        onChange={handleChangeIpAddress}
                    />
                    <div className="errorMsg">{ipAddressError}</div>

                    <label>Port:</label>
                    <input
                        type="text"
                        value={port}
                        onChange={handleChangePort}
                    />
                    <div className="errorMsg">{portError}</div>
                    <input type="submit" className="button" value="Register"/>
                </form>
            </div>
        </div>
    );
}
export default RegistrationForm;
