// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
// eslint-disable-next-line
import { login } from "../firebase/Auth.js";
export default () => {
  const viewlogIn = `
    <h2>LOGIN</h2> <form id="signup-form">
    <div class="form-group">
      <input type="text" id="signup-email" class="form-control" placeholder="Title" required>
    </div>
    <div class="form-group">
      <input type="password" id="signup-password" class="form-control" placeholder="Password" required>
    </div>
    <button type="submit" id="btnLogIn" class="btn btn-primary">Save changes</button>
  </form>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewlogIn;
  divElem.querySelector('#btnLogIn').addEventListener('click', () => {
    changeView('#/feed');
    const email = divElem.querySelector('#signup-email').value;
    const password = divElem.querySelector('#signup-password').value;
    console.log(email, password);
    // login(email, password);
    history.pushState(null, "LogIn", '#/feed')
  });
  return divElem;
};
