// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-generator-new.firebaseapp.com",
  projectId: "ai-logo-generator-new",
  storageBucket: "ai-logo-generator-new.firebasestorage.app",
  messagingSenderId: "86977465616",
  appId: "1:86977465616:web:daaa8b34a84d6220346995",
  measurementId: "G-FEZJ61YMN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)



