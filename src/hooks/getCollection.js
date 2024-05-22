import { getDocs } from "firebase/firestore";

export async function useGetAllFromCollection(collection) {
    const data = await getDocs(collection)
    return data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
}