import { PROJECT_BANNER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const projectBannerApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(PROJECT_BANNER_DATA_URL + pageName + '/', data, callback)
}