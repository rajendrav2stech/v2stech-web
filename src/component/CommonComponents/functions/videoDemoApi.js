import { DEMO_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const videoDemoApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(DEMO_DATA_URL + pageName + '/', data, callback)
}