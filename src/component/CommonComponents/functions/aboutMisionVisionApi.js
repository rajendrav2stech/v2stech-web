import { ABOUT_MISSION_VISION_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const aboutMisionVisionApi = (data, callback) => {
    GlobalUrlGetApiCall(ABOUT_MISSION_VISION_DATA_URL, data, callback)
}