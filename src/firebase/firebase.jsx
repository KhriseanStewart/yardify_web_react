// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu6SFstRM9_7YohOrKuFwEebeRHu2vPKk",
  authDomain: "yardify-a22ca.firebaseapp.com",
  projectId: "yardify-a22ca",
  storageBucket: "yardify-a22ca.firebasestorage.app",
  messagingSenderId: "678290610580",
  appId: "1:678290610580:web:be7be1096678de09935781",
  measurementId: "G-S02C0G3Z7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, db, analytics}