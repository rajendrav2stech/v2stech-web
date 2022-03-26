import { STATISTIC_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const statiSticApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(STATISTIC_DATA_URL + pageName + '/', data, callback)
}