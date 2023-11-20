import {makeAutoObservable} from "mobx";
import {createContext} from "react";

class GamePlayerNameStore {
    gamePlayerName = null;

    constructor() {
        makeAutoObservable(this);
    }

    setGamePlayerName(gamePlayerName) {
        this.gamePlayerName = gamePlayerName;
    }

    getGamePlayerName() {
        return this.gamePlayerName;
    }
}

export const gamePlayerNameStore = new GamePlayerNameStore();
export const gamePlayerNameContext = createContext(gamePlayerNameStore);