// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuRUivL7zEk8LOyRaXp03UC7VXY6-lE48",
  authDomain: "dwelling-bright.firebaseapp.com",
  projectId: "dwelling-bright",
  storageBucket: "dwelling-bright.appspot.com",
  messagingSenderId: "38065785365",
  appId: "1:38065785365:web:7e215246df15362ebf5c1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

export default firebaseAuth;
