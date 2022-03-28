// eslint-disable-next-line
import { createUser, signIn, userGoogle } from "../view-controler/controllers.js";
// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";

export const authentication = (email, password, divElem) => {
  createUser(email, password)
    .then(() => {
      changeView('#/logIn');
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, 'LogIn', '#/logIn');
      document.getElementById('notification').innerHTML = 'Se envió un correo de verificación';
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
