import { GET_NEWS_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const getNewsApi = (data, callback) => {
    GlobalUrlGetApiCall(GET_NEWS_DATA_URL, data, callback)
}