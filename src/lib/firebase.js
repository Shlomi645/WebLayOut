// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIHMCyzfX8inv2vWEjVGkZsAkk7KBAMSo",
  authDomain: "northstory-5b35c.firebaseapp.com",
  projectId: "northstory-5b35c",
  storageBucket: "northstory-5b35c.appspot.com", // fixed the typo: should be .appspot.com
  messagingSenderId: "227273634885",
  appId: "1:227273634885:web:97bdd0997f5658f2049f2c",
  measurementId: "G-TZQ5FVBNRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
