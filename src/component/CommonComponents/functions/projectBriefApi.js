import { PROJECT_BRIEF_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const projectBriefApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(PROJECT_BRIEF_DATA_URL + pageName + '/', data, callback)
}