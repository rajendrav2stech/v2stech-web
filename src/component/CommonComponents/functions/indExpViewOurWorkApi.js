import { IND_EXP_VIEW_OUR_WORK_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const indExpViewOurWorkApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(IND_EXP_VIEW_OUR_WORK_DATA_URL + pageName + '/', data, callback)
}