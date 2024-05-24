export function useLogout(navigation) {
    localStorage.clear()
    navigation("/login")
}