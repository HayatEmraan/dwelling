import firebaseAuth from "@/fb/fb.config";
import { OAuthProvider } from "firebase/auth";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

export const handleCreateUser = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const handleLogin = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};
export const handleGoogle = () => {
  return signInWithPopup(firebaseAuth, googleProvider);
};

export const handleFacebook = () => {
  return signInWithPopup(firebaseAuth, facebookProvider);
};

export const handleMicrosoft = () => {
  return signInWithPopup(firebaseAuth, microsoftProvider);
};

export const handleLogout = () => {
  return signOut(firebaseAuth);
};
