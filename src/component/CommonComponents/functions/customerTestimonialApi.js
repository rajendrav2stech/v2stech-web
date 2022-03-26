import { CUSTOMER_TESTIMONIAL_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const customerTestimonialApi = (data, pageName, callback) => {
    GlobalUrlGetApiCall(CUSTOMER_TESTIMONIAL_DATA_URL + pageName + '/', data, callback)
}