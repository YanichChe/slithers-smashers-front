import React from "react";
import {observer} from "mobx-react";
import '../../styles/game-page.css'
import {gameNameStore} from "../../stores/GameNameStore";

const TitleComponent = observer(() => {
    return (
        <div className='title__'>{gameNameStore.getGameName()}</div>
    );
});

export default TitleComponent;