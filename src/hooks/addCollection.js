import { addDoc } from "firebase/firestore";

export async function useAddToCollection(collection, data) {
    await addDoc(collection, data)
}