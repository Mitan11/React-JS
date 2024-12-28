import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_rCmPiJPlzaFHkA58qO1MlVKFswzemIY",
    authDomain: "protocol-966e7.firebaseapp.com",
    projectId: "protocol-966e7",
    storageBucket: "protocol-966e7.firebasestorage.app",
    messagingSenderId: "1068043849494",
    appId: "1:1068043849494:web:9b2f43566b631114bd8a37"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export  const provider = new GoogleAuthProvider();

// export default { auth, provider };