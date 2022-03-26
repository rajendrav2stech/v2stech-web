import { COOKIES_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const cookiesApi = (data, callback) => {
    GlobalUrlGetApiCall(COOKIES_DATA_URL, data, callback)
}