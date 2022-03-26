import { TIMELINE_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const aboutTimelineApi = (data, callback) => {
    GlobalUrlGetApiCall(TIMELINE_DATA_URL, data, callback)
}