import firebaseAuth from "@/fb/fb.config";
import {
  GithubAuthProvider,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

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

export const handleGithub = () => {
  return signInWithPopup(firebaseAuth, githubProvider);
};

export const handleLogout = () => {
  toast.success("Logout Successfully");
  return signOut(firebaseAuth);
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(firebaseAuth, email);
};
