import React from "react";
import exitImage from "../../images/exit.png"
import ConfigService from "../../api/ConfigService";

const Exit = () => {

    const exit = () => {
        ConfigService.exit();
        window.location.assign('http://localhost:3000');
    }
    return (
        <div>
            <img src={exitImage} onClick={exit} />
        </div>
    );
};

export default Exit;