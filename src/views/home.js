// eslint-disable-next-line
import { changeView } from "../view-controler/router.js"
export default () => {
  const viewHome = `
    <section id="pag1">
  <div class='containerHome'>
    <img class="girl" src="./img/image_ccexpress.png" alt="girl">
    <p>Ayuda a un perrito o gatito brindandole un hogar temporal y dales la oportunidad de ser amados mientras
      encuentran una familia para toda su vida. </p>
  </div>
    <button id="join">Unirse ahora</button>
    <button id="btnLog">Iniciar sesión</button>
  </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  divElem.querySelector('#join').addEventListener('click', () => {
    window.location.href = '#/signUp';
  });
  divElem.querySelector('#btnLog').addEventListener('click', () => {
    window.location.href = '#/logIn';
  });

  return divElem;
};
