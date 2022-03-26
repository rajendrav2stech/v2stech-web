import { SUBMIT_CONTACTUS_FORM_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlPostApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlPostApiCall"


export const submitContactUsFormApi = (data, callback) => {
    GlobalUrlPostApiCall(SUBMIT_CONTACTUS_FORM_DATA_URL, data, callback)
}