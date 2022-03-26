import { BREADCRUMB_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const breadCrumbApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(BREADCRUMB_DATA_URL + pageName + '/', data, callback)
}