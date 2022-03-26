import { DEVELOPMENT_SERVICES_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const devlopmentServicesApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(DEVELOPMENT_SERVICES_DATA_URL + pageName + '/', data, callback)
}