import { useAddToCollection } from "../../hooks/addCollection"
import { journalsCollection } from "../../config/firebase"

export async function useHandleFormSubmit(formSubmitEvent, data) {
    formSubmitEvent.preventDefault()
    useAddToCollection(journalsCollection, data)
}