// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5s04OdDU2rfD365lM863cC7QrxfavIHE" ,
  authDomain: "mern--auth-aef44.firebaseapp.com",
  projectId: "mern--auth-aef44",
  storageBucket: "mern--auth-aef44.appspot.com",
  messagingSenderId: "670699725905",
  appId: "1:670699725905:web:866eb85de97a1de38c8470"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);