import React, {useContext} from "react";
import {observer} from "mobx-react";
import '../../styles/game-page.css'
import {gameNameContext} from "../../stores/GameNameStore";

const TitleComponent = observer(() => {

    const gameNameStore = useContext(gameNameContext);

    return (
        <div className='title__'>{gameNameStore.getGameName()}</div>
    );
});

export default TitleComponent;