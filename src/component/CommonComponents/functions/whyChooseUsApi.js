import { WHY_CHOOSE_US_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const whyChooseUsApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(WHY_CHOOSE_US_DATA_URL + pageName + '/', data, callback)
}