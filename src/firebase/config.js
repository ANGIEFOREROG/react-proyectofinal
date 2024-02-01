
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwsM_43jvnVVePMzH-OnuBrOXRxxYo11o",
  authDomain: "ecommerce-herrerasir.firebaseapp.com",
  projectId: "ecommerce-herrerasir",
  storageBucket: "ecommerce-herrerasir.appspot.com",
  messagingSenderId: "124126742651",
  appId: "1:124126742651:web:030f3b30ef7765dd71bade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = ()=> app