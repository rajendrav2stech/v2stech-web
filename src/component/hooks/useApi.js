import { useEffect, useState } from 'react'

function useApi(callApi, pageName = '', id = false, useLoading = false) {

    const dependencyArray = pageName ? pageName : ""

    const [data, setData] = useState([])
    const [subData, setSubData] = useState([])
    const [loading, setLoading] = useState(true)

    const setResponseSubCategory = (res) => {
        if (res) {
            setSubData(res)
        }
        setLoading(false)
    }
    const getSubCategoryInfo = (category_id) => {

        if (pageName) {
            callApi({}, pageName, setResponseSubCategory, category_id)
        }
        else {
            callApi({}, setResponseSubCategory, category_id)
        }
    }


    useEffect(() => {
        let isActive = true;
        setLoading(true)
        const setResponse = (res) => {
            if (isActive && res && res.length > 0) {
                setData(res)
                if (id) {
                    getSubCategoryInfo(res[0].id)
                }
            }
        }
        if (pageName) {
            callApi({}, pageName, setResponse)
        }
        else {
            callApi({}, setResponse)
        }

        return () => isActive = false;

    }, [dependencyArray])

    return [data, id ? subData : "", id ? getSubCategoryInfo : "", useLoading ? loading : "", useLoading ? setLoading : ""]
}

export default useApi
