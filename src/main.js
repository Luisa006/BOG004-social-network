// Este es el punto de entrada de tu aplicacion

import { changeView } from './view-controler/router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init());
// cada vez que escuches un load ejecutame funcion init

// import { login } from "./firebase/Auth.js";
// const signupForm = document.querySelector("#signup-form");

// signupForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const email = document.querySelector("#signup-email").value;
//     const password = document.querySelector("#signup-password").value;
//     console.log(email, password);
//     login(email, password);
// })
