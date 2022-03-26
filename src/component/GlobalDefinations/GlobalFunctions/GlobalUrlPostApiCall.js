import axios from 'axios'

export const GlobalUrlPostApiCall = (url, data, callback, isFileUpload = false) => {
    let config = {
        header: {
            "Content-Type": 'application/json'
        }
        // headers: {
        //     'Authorization': `Bearer ${localStorage.getItem('token')}`
        // }
    }
    if (isFileUpload) {
        config.headers['Content-Type'] = 'multipart/form-data'
    }
   
    axios.post(url, data, config).then(res => {
        callback(res.data)
    }).catch(e => {
        callback(e.response)
    })
}

