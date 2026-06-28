import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-554d3.firebaseapp.com",
  projectId: "interviewiq-554d3",
  storageBucket: "interviewiq-554d3.firebasestorage.app",
  messagingSenderId: "970140179199",
  appId: "1:970140179199:web:a0c7c49705dcc684614aca"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}