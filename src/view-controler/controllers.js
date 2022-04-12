// import { async } from 'regenerator-runtime';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,
  GoogleAuthProvider, signInWithPopup,
  getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc, setDoc,
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

export const savePost = async (post) => {
  const db = getFirestore(); // lo acabe de agregar
  const docRef = await addDoc(
    collection(db, 'Post Paw-Paw'),
    post,
  );
  // console.log('Document written with ID: ', docRef.id);
  console.log(post);
};

export const getPosts = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'Post Paw-Paw'));
  const postList = [];
  querySnapshot.forEach((document) => {
    // console.log('doc: ', document);
    postList.push({ post: document.data().post, id: document.id, likes: document.data().likes });
  });
  return postList;
};

export const deletePost = (id) => {
  const db = getFirestore(); // lo acabe
  deleteDoc(doc(db, 'Post Paw-Paw', id));
};

export const editPost = async (id) => {
  const db = getFirestore();
  const post = await getDoc(doc(db, 'Post Paw-Paw', id));
  return post;
};

export const updatePost = (id, newPost) => {
  console.log(newPost);
  const db = getFirestore();
  // Add a new document in collection "cities"
  updateDoc(doc(db, 'Post Paw-Paw', id), newPost);
};

export const fnLikes = async (id) => {
  try {
    const db = getFirestore();
    const pawLikes = doc(collection(db, 'Post Paw-Paw'), id);

    const auth = getAuth();
    const user = auth.document.id;

    const likePost = await getDoc(pawLikes);
    let likes = likePost.data().likes;
    if (likes === undefined) {
      likes = [];
    }
    const index = likes.indexOf(user.id);
    if (index === -1) {
      likes.push(user.id);
    } else {
      likePost.splice(index);
    }
    await setDoc(
      pawLikes,
      {
        likes,
      },
      { merge: true },
    );
    console.log('document update with ID:', pawLikes.id);
    getPosts();
  } catch (e) {
    console.log('Error adding document: ', e);
  }
  getPosts();
};
