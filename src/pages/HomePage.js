import React from "react";
import '../styles/home-page.css'
import HomeHeaderComponent from "../components/home/HomeHeaderComponent";
import InfoPanelComponent from "../components/home/InfoPanelComponent";
import ButtonsComponent from "../components/home/ButtonsComponent";

const HomePage = () => {
    return (
        <div className='home'>
            <HomeHeaderComponent/>
            <InfoPanelComponent/>
            <ButtonsComponent/>
        </div>

    );
};

export default HomePage;
