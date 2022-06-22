// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    authDomain: "sdl-matosas.firebaseapp.com",
    apiKey: "AIzaSyAocNEz78AwaHDoS4x1EoANnKlImfA-oz0",
    storageBucket: "sdl-matosas.appspot.com",
    projectId: "sdl-matosas",
    messagingSenderId: "36124137654",
    appId: "1:36124137654:web:0f76575aa2f6b301282e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)