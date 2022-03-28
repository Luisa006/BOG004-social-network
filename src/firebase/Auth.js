// eslint-disable-next-line
import { createUser, signIn } from "../view-controler/controllers.js";
// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "../firebase/firebaseImport.js";



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

// export const login = (email, password) => {
//   return signIn(email, password)
//     .then((userCredential) => {

//       changeView('#/logIn');
//      alert('login exitoso');
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert('login erroneo');
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
// };

// auth/user-not-found

export const login = (email, password, divElem) => {
  signIn(email, password)
    .then((userCredential) => {
      changeView('#/feed');
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, 'LogIn', '#/logIn');
      // document.getElementById('notification').innerHTML = 'Su registro fue exitoso';
      // ...
      alert('login exitoso');
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const notificationLog = divElem.querySelector('#notificationLog');
      console.log(notificationLog);
      switch (errorCode) {
        case 'auth/user-not-found':
          notificationLog.innerText = 'Correo no Registrado';
          break;
        default:
          break;

      // alert('login erroneo');
      // console.log(errorCode);
      // console.log(errorMessage);
      }
    });
};








// // Login con Google
// export const logInGoogle= () => {
//   userGoogle(auth, provider)
//     .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     });
// };




export const logInGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(`El usuario ${user} se ha autenticado!!!`);
      window.location = '#/feed';

      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
