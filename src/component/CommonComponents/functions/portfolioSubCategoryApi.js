import { PORTFOLIO_CATEGORY_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const portfolioSubCategoryApi = (data, id, callback) => {
    GlobalUrlGetApiCall(PORTFOLIO_CATEGORY_DATA_URL + id, data, callback)
}