import { PROJECT_CUSTOMER_CHALLANGE_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const projectSCustomerChallangeApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(PROJECT_CUSTOMER_CHALLANGE_DATA_URL + pageName + '/', data, callback)
}