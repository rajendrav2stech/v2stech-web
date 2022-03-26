import { WE_ARE_COMMIT_FOR_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const weAreCommitForApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(WE_ARE_COMMIT_FOR_DATA_URL + pageName + '/', data, callback)
}