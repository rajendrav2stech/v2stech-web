import { NOTE_DATA_URL } from "../../GlobalDefinations/GlobalConstants/GlobalUrl"
import { GlobalUrlGetApiCall } from "../../GlobalDefinations/GlobalFunctions/GlobalUrlGetApiCall"

export const careerNoteApi = (data, callback) => {
    GlobalUrlGetApiCall(NOTE_DATA_URL, data, callback)
}