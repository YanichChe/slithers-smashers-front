import React from "react";
import '../../styles/home-page.css'

const HomeHeaderComponent = () => {

    const textStyles = {
        fontFamily: "Inter",
        fontSize: "2vh",
        color: "white",
    };

    return (
        <div className='container'>
            <h1 style={textStyles}>Online Game</h1>
        </div>

    );
};

export default HomeHeaderComponent;
