import { SLIDER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const sliderApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(SLIDER_DATA_URL + pageName + '/', data, callback)
}