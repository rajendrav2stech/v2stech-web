import { TERMS_CONDITION_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const termsConditionsApi = (data, callback) => {
    GlobalUrlGetApiCall(TERMS_CONDITION_DATA_URL, data, callback)
}