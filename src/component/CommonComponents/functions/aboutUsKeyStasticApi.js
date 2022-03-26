import { ABOUT_KEY_STATISTIC_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const aboutUsKeyStasticApi = (data, callback) => {
    GlobalUrlGetApiCall(ABOUT_KEY_STATISTIC_DATA_URL, data, callback)
}