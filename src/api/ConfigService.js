import axios from "axios";

export default class ConfigService {
    static sendStartPost(
        height, width, foodStatic, gameName, username
    ) {
        return axios.post('/master/start', {

            height: height,
            width: width,
            foodStatic: foodStatic,
            gameName: gameName,
            username: username,
        })
    }

    static getGameState() {
        return axios.get('/player/game-state')
    }
}