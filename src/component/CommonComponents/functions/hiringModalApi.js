import { HIRING_MODAL_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const hiringModalApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(HIRING_MODAL_DATA_URL + pageName + '/', data, callback)
}