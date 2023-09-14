// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTTR5n0FL0hmAPasBewFsqw3Mh9nuJbPU",
  authDomain: "let-me-retire-already.firebaseapp.com",
  projectId: "let-me-retire-already",
  storageBucket: "let-me-retire-already.appspot.com",
  messagingSenderId: "933470090557",
  appId: "1:933470090557:web:40cbc470bcf7247d6cc154",
  measurementId: "G-N1FJK57JGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    // Successfully logged out
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { app, db, auth, signInWithPopup, logout, GoogleAuthProvider };
