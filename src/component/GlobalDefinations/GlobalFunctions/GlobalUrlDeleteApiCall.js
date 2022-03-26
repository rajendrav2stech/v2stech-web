import axios from 'axios'

export const GlobalUrlDeleteApiCall = (url, data, callback) => {
    axios.delete(url, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }, data).then(res => {
        callback(res.data)
    }).catch(e => {
        callback(e.response)
    })
}
