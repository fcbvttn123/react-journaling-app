export function useSortArrayByDate(arr) {
    return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}