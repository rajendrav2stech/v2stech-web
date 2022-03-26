import { PRIVACY_POLICY_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const privacyPolicyApi = (data, callback) => {
    GlobalUrlGetApiCall(PRIVACY_POLICY_DATA_URL, data, callback)
}