import axios from 'axios'

export const GlobalUrlGetApiCall = async (url, data, callback) => {

    var config = {
        method: 'get',
        url: url,
        params: data,
        // headers: {
        //     'Authorization': `Bearer ${localStorage.getItem('token')}`
        // }
    };
    await axios(config).then(res => {

        callback(res.data)
    }).catch(e => {
            callback(e.response)

    })
}