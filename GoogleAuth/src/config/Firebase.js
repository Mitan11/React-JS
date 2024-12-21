// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC3EWc5gJ7y9dxo1Cke_-xauTxjk5v4RR8",
  authDomain: "authdeom-2a727.firebaseapp.com",
  projectId: "authdeom-2a727",
  storageBucket: "authdeom-2a727.firebasestorage.app",
  messagingSenderId: "1070473659045",
  appId: "1:1070473659045:web:84b7c14f14bd97795e834c",
  measurementId: "G-YHL397HVTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider };
