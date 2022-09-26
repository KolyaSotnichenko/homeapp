// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiKK69cMZTc6Daw-N8FmuwCvBpQBq7Z8o",
  authDomain: "homeapp-88399.firebaseapp.com",
  projectId: "homeapp-88399",
  storageBucket: "homeapp-88399.appspot.com",
  messagingSenderId: "686821420123",
  appId: "1:686821420123:web:784fc62c0209a3b5f0637e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);