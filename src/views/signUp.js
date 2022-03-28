/* eslint-disable quotes */
// eslint-disable-next-line
import { authentication } from "../firebase/Auth.js";
import { userGoogle } from "../view-controler/controllers.js";
import { GoogleAuthProvider } from "../firebase/firebaseImport.js";

export default () => {
  const viewSignUp = `
  <section id="pag2">
  <div class='containerSignUp'>
  <h2>REGÍSTRATE</h2>
  <form class="formSignUp">
    <input id="email" class="inputForm" type="email"  placeholder="e-mail">
    <input id="user" class="inputForm" type="text"  placeholder="usuario">
    <input id="password" class="inputForm" type="password" placeholder="contraseña">
    <button id="btnSignUp">Registrate</button>
    <div id='notification'></div>
    <img id="btnGoogle" class="btngoogle" src="img/gg-removebg-preview.png" alt="logoGoogle">
  </form>
    <h4> ¿Ya tienes cuenta? <a id="linkLogin" href="#/logIn"> Inicia Sesión </a> </h4>
    </div>
    <img class="dog-cat" src="./img/image (2).png" alt="dog-Cat">
</section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewSignUp;
  divElem.querySelector('#btnSignUp').addEventListener('click', () => {
    const email = divElem.querySelector('#email').value;
    // const user= divElem.querySelector('#user').value;
    const password = divElem.querySelector('#password').value;
    console.log(email, password);
    authentication(email, password, divElem);
  });
  divElem.querySelector('#btnGoogle').addEventListener('click', () => {
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
  });

  return divElem;
};
