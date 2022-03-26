import { NEWS_ORDER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const newsOrderApi = (data, pageName, callback) => {
    let url = NEWS_ORDER_DATA_URL + pageName + '/'
    GlobalUrlGetApiCall(url, data, callback)
}