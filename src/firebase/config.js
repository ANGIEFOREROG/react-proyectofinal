// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMlSa9-LkoJnmDPTsfQfOxUUlzAXw7vTs",
  authDomain: "comision-49905-1662c.firebaseapp.com",
  projectId: "comision-49905-1662c",
  storageBucket: "comision-49905-1662c.appspot.com",
  messagingSenderId: "1096533914970",
  appId: "1:1096533914970:web:5a15c9a2c8efd203ad2f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase = ()=> app