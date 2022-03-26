import { NEWS_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const newsApi = (data, callback) => {
    GlobalUrlGetApiCall(NEWS_DATA_URL, data, callback)
}