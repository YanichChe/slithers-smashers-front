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

    static sentHeadDirection(direction) {
        return axios.patch('/player/change-direction', {
            direction: direction
        })
    }

    static getGamesList() {
        return axios.get("/player/games-list")
    }
}
