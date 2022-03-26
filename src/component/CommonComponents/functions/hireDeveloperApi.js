import { HIRE_DEVELOPER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const hireDeveloperApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(HIRE_DEVELOPER_DATA_URL + pageName + '/', data, callback)
}

