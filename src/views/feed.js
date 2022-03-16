// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
export default () => {
  const viewHome = `
    <h2>FEED</h2>
    <button id="btnHome">HOME</button>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  divElem.querySelector('#btnHome').addEventListener('click', () => {
    changeView('#/');
    history.pushState(null, "LogIn", '#/')
  });
  return divElem;
};
