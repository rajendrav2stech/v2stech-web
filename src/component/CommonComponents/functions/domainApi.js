import { DOMAIN_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const domainApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(DOMAIN_DATA_URL + pageName + '/', data, callback)
}