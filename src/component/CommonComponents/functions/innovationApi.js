import { INNOVATION_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const innovationApi = (data, callback) => {
    GlobalUrlGetApiCall(INNOVATION_DATA_URL, data, callback)
}