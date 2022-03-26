import { PROJECT_FUN_FEATURE_LIST_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const projectFeatureListApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(PROJECT_FUN_FEATURE_LIST_DATA_URL + pageName + '/', data, callback)
}