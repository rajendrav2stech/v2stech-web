import { CTA_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const ctaApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(CTA_DATA_URL + pageName + '/', data, callback)
}