import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup,
  getFirestore, collection, addDoc, getDocs,
} from "../firebase/firebaseImport.js";


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



export const savePost= async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'Post Paw-Paw'));
  let postList = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    postList.push(data);
    //console.log(`${doc.id} => ${data.Usuario} ${data.Comentario}`);
  });
  //console.log(postList)
  return postList;
};

