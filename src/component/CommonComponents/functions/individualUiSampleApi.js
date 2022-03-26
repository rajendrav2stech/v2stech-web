import { UI_SAMPLE_INDIVIDUAL_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const individualUiSampleApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(UI_SAMPLE_INDIVIDUAL_DATA_URL + pageName + '/', data, callback)
}