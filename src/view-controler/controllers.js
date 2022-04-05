// import { async } from 'regenerator-runtime';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,
  GoogleAuthProvider, signInWithPopup,
  getFirestore, collection, getDocs, addDoc, deleteDoc, doc, setDoc,
} from '../firebase/firebaseImport.js';

export const createUser = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser)
        .then(() => {
        // Email verification sent!
        });
      return user;
    });
};

export const signIn = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

// Google
export const userGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider);
};

// FireStore
const db = getFirestore();

export const savePost = async (post) => {
  const docRef = await addDoc(collection(db, 'Post Paw-Paw'), {
    post,
  });
  // console.log('Document written with ID: ', docRef.id);
  console.log(post);
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'Post Paw-Paw'));
  const postList = [];
  querySnapshot.forEach((document) => {
    // console.log('doc: ', document);
    postList.push({ post: document.data().post, id: document.id });
  });
  return postList;
};

export const deletePost = (id) => {
  deleteDoc(doc(db, 'Post Paw-Paw', id));
};

export const editPost = async (post) => {
  // Add a new document in collection "cities"
  await setDoc(doc(db, 'Post Paw-Paw', post), {
    post,
  });
};
