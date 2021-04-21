import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/'

const getPlayerInfoByUid = async (id) => {
    const url = baseUrl + 'player/' + id
    // const resp = await axios.get(url)
    // return resp.data
    return await (await axios.get(url)).data
}

export default {
    getPlayerInfoByUid
}