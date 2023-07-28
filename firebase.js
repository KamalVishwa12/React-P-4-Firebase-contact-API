// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoUG-nxAe46IoiVxLJ-o9ncSFyXuUgG5A",
  authDomain: "vite-contact-5fa39.firebaseapp.com",
  projectId: "vite-contact-5fa39",
  storageBucket: "vite-contact-5fa39.appspot.com",
  messagingSenderId: "418272891107",
  appId: "1:418272891107:web:aaf5781e946d3457ac75d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);