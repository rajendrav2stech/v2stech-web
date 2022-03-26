import { WHAT_WE_OFFER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const whatWeOfferApi = (data, pageName, callback, id = "") => {
    let url = WHAT_WE_OFFER_DATA_URL + pageName + '/'
    if (id) {
        url = url + id +'/'
    }
    GlobalUrlGetApiCall(url, data, callback)
}