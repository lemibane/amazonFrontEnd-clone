import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq8ai7oPPxDSUFM5jSdz6R0C1sfB6Ptzw",
  authDomain: "frontend-clone-e456e.firebaseapp.com",
  projectId: "frontend-clone-e456e",
  storageBucket: "frontend-clone-e456e.appspot.com",
  messagingSenderId: "288824456943",
  appId: "1:288824456943:web:fbd15a0a559374b8a6cd1a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
