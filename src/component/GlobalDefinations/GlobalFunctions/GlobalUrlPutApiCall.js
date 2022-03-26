import axios from 'axios'

export const GlobalUrlPutApiCall = (url, data, callback) => {
    axios.put(url, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        callback(res.data)
    }).catch(e => {
        callback(e.response)
    })
}
