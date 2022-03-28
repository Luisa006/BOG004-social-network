// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
// eslint-disable-next-line
import { login } from "../firebase/Auth.js";
export default () => {
  const viewlogIn = `
   <div class='containerLogIn'>
    <h2>INICIAR SESIÓN</h2> <form class="formLogIn">
    <input type="text" id="signup-email" class="inputForm" placeholder="e-mail" required>
    <input type="password" id="signup-password" class="inputForm" placeholder="contraseña" required>
    <button type="submit" id="btnLogIn">Iniciar sesión</button>
    <div id='notificationLog'></div>
    <img id="btnGoogle" class="btngoogle" src="img/gg-removebg-preview.png" alt="logoGoogle">
  </form>
  <h4> ¿Aún no tienes cuenta? <a id="linkLogin" href="#/logIn"> Regístrate</a> </h4>
  </div>
  <div class='container-Home-Dos'>
<img class="girl" src="./img/image_ccexpress.png" alt="girl">
<p>Ayuda a un perrito o gatito brindandole un hogar temporal y dales la oportunidad de ser amados mientras
  encuentran una familia para toda su vida. </p>
</div> `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewlogIn;
  divElem.querySelector('#btnLogIn').addEventListener('click', () => {
    // changeView('#/feed');
    const email = divElem.querySelector('#signup-email').value;
    const password = divElem.querySelector('#signup-password').value;
    console.log(email, password);
    login(email, password, divElem);
    // history.pushState(null, 'LogIn', '#/feed');
  });
  return divElem;
};
