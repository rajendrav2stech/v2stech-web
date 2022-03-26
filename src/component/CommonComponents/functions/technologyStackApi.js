import { TECHNOLOGY_STACK_CATEGORY_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const technologyStackApi = (data, pageName, callback, id = null) => {
    let url = `${TECHNOLOGY_STACK_CATEGORY_URL}${pageName}${id != null ? "/" + id : '/'}`

    GlobalUrlGetApiCall(url, data, callback)

}