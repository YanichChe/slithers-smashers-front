import axios from "axios";

export default class ConfigService {
    static sendStartPost(
        height, width, foodStatic, gameName, username
    ) {
        return axios.post('/start', {

            height: height,
            width: width,
            foodStatic: foodStatic,
            gameName: gameName,
            username: username,
        })
    }
}