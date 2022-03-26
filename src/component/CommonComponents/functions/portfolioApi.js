import { PORTFOLIO_CATEGORY_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const portfolioApi = (data, pageName, callback, id=null) => {
    let url = `${PORTFOLIO_CATEGORY_DATA_URL}${pageName}${id != null ? "/" + id : '/'}`
    GlobalUrlGetApiCall(url, data, callback)
}