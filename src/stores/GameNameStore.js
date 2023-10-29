import {makeAutoObservable} from "mobx";
import {createContext} from "react";

class GameNameStore {
    gameName = "My Game name";

    constructor() {
        makeAutoObservable(this);
    }

    setGameName(gameName) {
        this.gameName = gameName;
    }

    getGameName() {
        return this.gameName;
    }
}

export const gameNameStore = new GameNameStore();
export const gameNameContext = createContext(gameNameStore);