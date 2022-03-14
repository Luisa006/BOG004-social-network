import { login } from "../firebase/Auth.js";
export default () => {
    const viewHome = `
    <h2>LOGIN</h2> <form id="signup-form">
    <div class="form-group">
      <input type="text" id="signup-email" class="form-control" placeholder="Title" required>
    </div>
    <div class="form-group">
      <input type="password" id="signup-password" class="form-control" placeholder="Password" required>
    </div>
    <button type="submit" class="btn btn-primary">Save changes</button>
  </form>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewHome;
    divElem.querySelector("#join").addEventListener("click", () => {
        changeView("#/signIn") //login 
    });
    return divElem;
}