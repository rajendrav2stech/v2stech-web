import { CASE_STUDY_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const caseStudyApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(CASE_STUDY_DATA_URL + pageName + '/', data, callback)
}