import React from "react";
import '../styles/create-custom-game-page.css'
import RegistrationForm from "../components/create-custom-game/RegistrationForm";
import TitleComponent from "../components/create-custom-game/TitleComponent";

const GetStartedPage = () => {
    return (
        <div className='create-custom-game'>
            <TitleComponent />
            <RegistrationForm/>
            <div id="figure3"></div>
            <div id="figure4"></div>
        </div>
    );
};

export default GetStartedPage;
