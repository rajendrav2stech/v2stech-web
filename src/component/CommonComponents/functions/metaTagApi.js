import { METATAG_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const metaTagApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(METATAG_DATA_URL + pageName + '/', data, callback)
}