// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWIlwqq7Pt8_UWTa1zZ7vQE6_MGYshMcA",
  authDomain: "react-projects-fe292.firebaseapp.com",
  projectId: "react-projects-fe292",
  storageBucket: "react-projects-fe292.appspot.com",
  messagingSenderId: "1000517600283",
  appId: "1:1000517600283:web:48b03824333700b66a64be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google Login 
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export async function startGoogleLogin() {
  let res = await signInWithPopup(auth, provider)
  return res.user
}

// Firestore Database 
const firestore = getFirestore(app)
export const journalsCollection = collection(firestore, "journals")