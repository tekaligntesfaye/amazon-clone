// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/app";
// import 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1tCRC0xLA0iUQMf1cjp8Oq9sd3uVKn5I",
  authDomain: "teke-8405f.firebaseapp.com",
  projectId: "teke-8405f",
  storageBucket: "teke-8405f.appspot.com",
  messagingSenderId: "795577211553",
  appId: "1:795577211553:web:1cd9609b8b81bd71bd6ee0",
  measurementId: "G-28ZMYMHQ4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };