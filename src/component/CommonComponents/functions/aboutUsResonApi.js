import { ABOUTUS_REASON_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const aboutUsResonApi = (data, callback) => {
    GlobalUrlGetApiCall(ABOUTUS_REASON_DATA_URL, data, callback)
}