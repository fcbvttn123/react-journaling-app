import { isSameMonth } from "date-fns"

export function useSortArrayIntoGroups(arr) {
    let newArr = []
    let monthGroup = []
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i+1]) {
            return
        }
        let result = isSameMonth(arr[i].date, arr[i+1].date) 
        console.log(`${arr[i].date} and ${arr[i+1].date} is in the same month? --> ${result}`)
        if(result) {
            monthGroup.push(arr[i+1])
        } else {
            newArr.push(monthGroup)
            monthGroup = []
            monthGroup.push(arr[i+1])
        }
    }
}