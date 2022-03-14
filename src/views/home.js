import { changeView } from "../view-controler/router.js"
export default () => {
    const viewHome = `
    <section id="pag1">
    <img class="girl" src="./img/image_ccexpress.png" alt="girl">
    <p>Ayuda a un perrito o gatito brindandole un hogar temporal y dales la oportunidad de ser amados mientras
      encuentran una familia para toda su vida. </p>
    <button id="join">UNIRSE AHORA</button>
  </section>`

    const divElem = document.createElement('div')
        divElem.innerHTML = viewHome;
        divElem.querySelector("#join").addEventListener("click", () => {
        changeView("#/signIn");
          
        });
       

    return divElem;
}