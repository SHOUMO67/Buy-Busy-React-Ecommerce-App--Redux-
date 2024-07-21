// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyDkzFYHT1q9ssEbPC-Plf__dctPFLN7Ndc",
  authDomain: "my-project-4ad12.firebaseapp.com",
  projectId: "my-project-4ad12",
  storageBucket: "my-project-4ad12.appspot.com",
  messagingSenderId: "637268187172",
  appId: "1:637268187172:web:0ecd04ca1c3bed7575a0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();