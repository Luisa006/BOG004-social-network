// eslint-disable-next-line
import { authentication } from "../firebase/Auth.js";

export default () => {
  const viewSignUp = `
  <section id="pag2">
  <h2>REGÍSTRATE</h2>
  <form class="formSignUp">
    <input id="email" class="inputForm" type="email"  placeholder="e-mail">
    <input id="user" class="inputForm" type="text"  placeholder="usuario">
    <input id="password" class="inputForm" type="password" placeholder="contraseña">
    <button id="btnSignUp">Registrate</button>
    <div id='notification'></div>
    <img class="btngoogle" src="img/gg-removebg-preview.png" alt="logoGoogle">
  </form>
    <h4> ¿Ya tienes cuenta? <a id="linkLogin" href="#/logIn"> Inicia Sesión </a> </h4>
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

  return divElem;
};
