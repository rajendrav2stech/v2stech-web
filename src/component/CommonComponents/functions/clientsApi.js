import { CLIENTS_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const clientsApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(CLIENTS_DATA_URL + pageName + '/', data, callback)
}