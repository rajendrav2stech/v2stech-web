import { PROJECT_SERVICES_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const projectServicesApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(PROJECT_SERVICES_DATA_URL + pageName + '/', data, callback)
}