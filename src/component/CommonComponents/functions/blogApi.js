import { BLOG_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const blogApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(BLOG_DATA_URL + pageName + '/', data, callback)
}