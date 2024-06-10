import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '68c64706cfd84a938dc113f503d67107'
    }
})