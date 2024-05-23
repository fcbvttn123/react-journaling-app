export function useGetAccountInfo() {
    return JSON.parse(localStorage.getItem("fcbvttn-react-journaling-app-accountInfo"))
}