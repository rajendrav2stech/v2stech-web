import { NEWSLETTER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const newsLetterApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(NEWSLETTER_DATA_URL + pageName + '/', data, callback)
}