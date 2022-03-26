import { CAREER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const careerApi = (data, callback) => {
    GlobalUrlGetApiCall(CAREER_DATA_URL, data, callback)
}