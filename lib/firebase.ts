// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn6_Xs5YEjrmC2pKgRsH_aK7eDpt3ILmw",
  authDomain: "estateease-4067c.firebaseapp.com",
  projectId: "estateease-4067c",
  storageBucket: "estateease-4067c.firebasestorage.app",
  messagingSenderId: "977491815408",
  appId: "1:977491815408:web:a7e0ee2f1355220eb74b35",
  measurementId: "G-30VJJV2BXZ"
};

// Initialize Firebase





const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();