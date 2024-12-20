// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_rCmPiJPlzaFHkA58qO1MlVKFswzemIY",
  authDomain: "protocol-966e7.firebaseapp.com",
  projectId: "protocol-966e7",
  storageBucket: "protocol-966e7.firebasestorage.app",
  messagingSenderId: "1068043849494",
  appId: "1:1068043849494:web:9b2f43566b631114bd8a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider };
