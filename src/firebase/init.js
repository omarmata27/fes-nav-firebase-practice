// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEntT5OVoFBtZrhWuZ0874gs0Ev1i06KI",
  authDomain: "fes-nav-practice.firebaseapp.com",
  projectId: "fes-nav-practice",
  storageBucket: "fes-nav-practice.appspot.com",
  messagingSenderId: "370368781556",
  appId: "1:370368781556:web:955037dff0fefdb99a92a1",
  measurementId: "G-MS2V9K56G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
