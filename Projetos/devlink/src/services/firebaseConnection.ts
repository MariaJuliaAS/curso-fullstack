import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD90-p1tS4cVdJPW_NKfvs80hyOLtaEmIY",
    authDomain: "devlink-e4dfd.firebaseapp.com",
    projectId: "devlink-e4dfd",
    storageBucket: "devlink-e4dfd.firebasestorage.app",
    messagingSenderId: "297993314332",
    appId: "1:297993314332:web:631bbf86ebbf53605bffd9",
    measurementId: "G-97VBW4X1LL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };