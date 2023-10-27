import React from "react";
import '../styles/get-started-page.css'
import TitleComponent from "../components/get-started/TitleComponent";
import InputComponent from "../components/get-started/InputComponent";

const GetStartedPage = () => {
    return (
        <div className='get-started'>
            <TitleComponent/>
            <InputComponent/>
            <div id='figure1'/>
            <div id='figure2'/>
            <div className='author'>@Yana 2023</div>
        </div>
    );
};

export default GetStartedPage;
