import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
export { getAuth, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
  getFirestore, collection, addDoc, getDocs,
};
