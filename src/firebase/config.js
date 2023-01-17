// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"; // uso lite porque no necesito todas las funcionalidades
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEDZDsmeimeU_tn7nqMiVy7Nk9sfJBQvo",
  authDomain: "react-cursos-1cf0e.firebaseapp.com",
  projectId: "react-cursos-1cf0e",
  storageBucket: "react-cursos-1cf0e.appspot.com",
  messagingSenderId: "364982146249",
  appId: "1:364982146249:web:807a8315b82fe581792918"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);