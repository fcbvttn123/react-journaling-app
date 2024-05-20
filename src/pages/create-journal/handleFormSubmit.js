import { useAddToCollection } from "../../hooks/addCollection"
import { journalsCollection } from "../../config/firebase"
import { localStorageKeyForAccountInfo } from "../../App"

export async function useHandleFormSubmit(formSubmitEvent, data) {
    formSubmitEvent.preventDefault()
    useAddToCollection(journalsCollection, {
        ...data, 
        email: JSON.parse(localStorage.getItem(localStorageKeyForAccountInfo)).email
    })
}