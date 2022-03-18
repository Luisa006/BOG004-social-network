// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
// eslint-disable-next-line
import { login } from "../firebase/Auth.js";
export default () => {
  const viewlogIn = `
    <h2>LOGIN</h2> <form class="formLogIn">
    <input type="text" id="signup-email" class="inputForm" placeholder="e-mail" required>
    <input type="password" id="signup-password" class="inputForm" placeholder="contraseña" required>
    <button type="submit" id="btnLogIn">Iniciar sesión</button>
  </form>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewlogIn;
  divElem.querySelector('#btnLogIn').addEventListener('click', () => {
    changeView('#/feed');
    const email = divElem.querySelector('#signup-email').value;
    const password = divElem.querySelector('#signup-password').value;
    console.log(email, password);
    login(email, password);
    history.pushState(null, 'LogIn', '#/feed');
  });
  return divElem;
};
