// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyZ4GXagujiuImHxHRID470qm33lgHPWU",
  authDomain: "updatedfrontend-clone.firebaseapp.com",
  projectId: "updatedfrontend-clone",
  storageBucket: "updatedfrontend-clone.appspot.com",
  messagingSenderId: "372031083834",
  appId: "1:372031083834:web:40eb304632a38d7027ac03"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// all methods needed to work for authentication are available in auth object
export const auth = getAuth(app);
export const db = app.firestore();