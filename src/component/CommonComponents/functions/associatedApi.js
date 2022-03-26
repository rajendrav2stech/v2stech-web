import { ASSOCIATED_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const associatedApi = (data, callback) => {
    GlobalUrlGetApiCall(ASSOCIATED_DATA_URL, data, callback)
}