// eslint-disable-next-line
import { createUser, signIn, userGoogle } from "../view-controler/controllers.js";
// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
import { GoogleAuthProvider } from './firebaseImport.js';

export const authentication = (email, password, divElem) => createUser(email, password)
  .then(() => {
    console.log('authentication then')
    changeView('#/logIn');
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, 'LogIn', '#/logIn');
    document.getElementById('notification').innerHTML = 'Se envió un correo de verificación';
    // console.log(user, 'exitoso');
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
    return error;
  });

export const login = (email, password, divElem) => {
  signIn(email, password)
    .then(() => {
      changeView('#/feed');
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, 'LogIn', '#/logIn');
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const notification = divElem.querySelector('#notification');
      console.log(notification);
      switch (errorCode) {
        case 'auth/user-not-found':
          notification.innerText = 'Correo no Registrado';
          break;
        case 'auth/wrong-password':
          notification.innerText = 'Contraseña incorrecta';
          break;
        case 'auth/invalid-email':
          notification.innerText = 'Correo Invalido';
          break;
        default:
          break;
      }
    });
};
export const btnGoogle = () => {
  const provider = new GoogleAuthProvider();
  console.log('btnGoogle');
  // e.preventDefault();
  userGoogle()
    .then((result) => {
    // The signed-in user info.
      const user = result.user;
      console.log(`El usuario ${user} se ha autenticado!!!`);
      window.location.href = '#/feed';

      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      // ...
    });
};
