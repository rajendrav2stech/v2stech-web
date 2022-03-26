import { HEADER_FOOTER_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const headerFooterApi = (data, callback) => {
    GlobalUrlGetApiCall(HEADER_FOOTER_DATA_URL, data, callback)
}