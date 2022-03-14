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
    <button type="submit" id="btnLohIn" class="btn btn-primary">Save changes</button>
  </form>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewlogIn;
     divElem.querySelector("#btnLohIn").addEventListener("click", () => {
        const email = divElem.querySelector("#signup-email").value;
        const password = divElem.querySelector("#signup-password").value;
        login(email, password);
        
     });
    return divElem;
}