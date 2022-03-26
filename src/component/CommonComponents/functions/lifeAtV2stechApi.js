import { LIFE_AT_V2STECH_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const lifeAtV2stechApi = (data, callback) => {
    GlobalUrlGetApiCall(LIFE_AT_V2STECH_DATA_URL, data, callback)
}