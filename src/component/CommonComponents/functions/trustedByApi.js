import { TRUSTED_BY_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const trustedByApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(TRUSTED_BY_DATA_URL + pageName + '/', data, callback)
}