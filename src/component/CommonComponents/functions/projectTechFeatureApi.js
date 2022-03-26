import { PROJECT_TECH_FEATURE_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const projectTechFeatureApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(PROJECT_TECH_FEATURE_DATA_URL + pageName + '/', data, callback)
}