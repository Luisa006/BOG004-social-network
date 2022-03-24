// eslint-disable-next-line
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "./firebaseImport.js";
// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";

export const authentication = (email, password, divElem) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser)
        .then(() => {
        // Email verification sent!
        });

      changeView('#/logIn');
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, 'LogIn', '#/logIn');
      // document.getElementById('notification').innerHTML = 'Su registro fue exitoso';
      console.log(user, 'exitoso');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const notification = divElem.querySelector('#notification');
      console.log(notification);
      switch (errorCode) {
        case 'auth/invalid-email':
          notification.innerText = 'Correo Invalido';
          break;
        case 'auth/email-already-in-use':
          notification.innerText = 'Correo ya registrado';
          break;
        case 'auth/weak-password':
          notification.innerText = 'La contraseña debe tener minimo 6 caracteres';
          break;
        default:
          break;
      }
    });
};

export const login = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // alert('login exitoso');
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('login erroneo');
      console.log(errorCode);
      console.log(errorMessage);
    });
};
