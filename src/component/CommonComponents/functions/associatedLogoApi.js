import { ASSOCIATED_LOGO_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const associatedLogoApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(ASSOCIATED_LOGO_DATA_URL + pageName + '/', data, callback)
}