import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,
  GoogleAuthProvider, signInWithPopup,
  getFirestore, collection, getDocs, addDoc,
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

export const savePost = async (post) => {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, 'Post Paw-Paw'), {
    post,
  });
  console.log('Document written with ID: ', docRef.id);
  const querySnapshot = await getDocs(collection(db, 'Post Paw-Paw'));
  const postList = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    postList.push(data);
    console.log(`${doc.id} => ${data.Usuario} ${data.Comentario}`);
  });
  console.log(postList);
  return postList;
};
