// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGeEA0aMCQjGyAtOXImw6ZZGmzKILON24",
    authDomain: "todoapp-8e58c.firebaseapp.com",
    projectId: "todoapp-8e58c",
    storageBucket: "todoapp-8e58c.firebasestorage.app",
    messagingSenderId: "101680726626",
    appId: "1:101680726626:web:9c1f201fb73e424189c73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default { app }
