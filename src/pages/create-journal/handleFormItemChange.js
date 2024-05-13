export function useHandleFormItemChange(onChangeEvent, prevObj) {
    const { name, value } = onChangeEvent.target
    let newObj = {
        ...prevObj, 
        [name]: value,
    }
    return newObj
}