import { PROJECT_FUN_FEATURE_SLIDER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const projectFeatureSliderApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(PROJECT_FUN_FEATURE_SLIDER_DATA_URL + pageName + '/', data, callback)
}