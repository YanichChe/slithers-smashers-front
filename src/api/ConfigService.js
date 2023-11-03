import axios from "axios";

export default class ConfigService {
    static sendStartPost(
        height, width, foodStatic, stateDelayMs, gameName, username
    ) {
        return axios.post('/start', {

            height: height,
            width: width,
            foodStatic: foodStatic,
            stateDelayMs: stateDelayMs,
            gameName: gameName,
            username: username,
        })
    }
}