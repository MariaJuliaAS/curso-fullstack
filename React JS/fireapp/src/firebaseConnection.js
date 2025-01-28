import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4-YB0peBR2yoc-L77s0mtPVYfvNzYDSU",
    authDomain: "curso-sujeito-c1977.firebaseapp.com",
    projectId: "curso-sujeito-c1977",
    storageBucket: "curso-sujeito-c1977.firebasestorage.app",
    messagingSenderId: "568808949410",
    appId: "1:568808949410:web:03129ee4780f703ca0f9fb",
    measurementId: "G-L1JDJDM2F9"
  };

  const firebaseApp = initializeApp(firebaseConfig); //inicializou a firebase
  const db = getFirestore(firebaseApp); //getFirestore serve para ter a conexão do banco com a firebase
  const auth = getAuth(firebaseApp) //Auth serve para fazer login e criar usuarios //conexao do auth com a firebase

  export { db, auth };