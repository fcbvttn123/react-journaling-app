const localStorageKey = "react-journal-app"

export function useHandleFormSubmit(formSubmitEvent, newData) {
    formSubmitEvent.preventDefault()
    let allJournals = JSON.parse(localStorage.getItem(localStorageKey)) || []
    allJournals.push(newData)
    localStorage.setItem(localStorageKey, JSON.stringify(allJournals))
}