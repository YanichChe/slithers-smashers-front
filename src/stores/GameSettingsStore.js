import {makeAutoObservable} from "mobx";
import {createContext} from "react";

class GameSettingsStore {
    n = 20;
    m = 40;

    constructor() {
        makeAutoObservable(this);
    }

    setN(n) {
        this.n = n;
    }

    setM(m) {
        this.m = m;
    }

    getN() {
        return this.n;
    }

    getM() {
        return this.m
    }
}

export const gameSettingsStore = new GameSettingsStore();
export const GameSettingsContext = createContext(gameSettingsStore);