import {makeAutoObservable} from "mobx";
import {createContext} from "react";

class ChooseGameNameStore {
    chooseGameName = null;

    constructor() {
        makeAutoObservable(this);
    }

    setChooseGameName(gameName) {
        this.chooseGameName = gameName;
    }

    getChooseGameName() {
        return this.chooseGameName;
    }
}

export const chooseGameNameStore = new ChooseGameNameStore();
export const chooseGameNameContext = createContext(chooseGameNameStore);