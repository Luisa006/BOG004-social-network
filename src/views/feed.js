// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
import { savePost } from "../view-controler/controllers.js";
export default () => {
  const viewHome = `
    <h2>FEED</h2>
    <form id="fromPost">
<textarea id="textPost" placeholder="Publica aquí"></textarea>
<button id="btnPublishPost" type="submit">Publicar</button>
</form>
    <button id="btnHome">HOME</button>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  divElem.querySelector('#btnPublishPost').addEventListener('click', (e) => {
    const post= divElem.querySelector('#textPost').value;
    console.log("comentario");
    //savePost();
    savePost().then(response => { 
console.log(response)
    }
    )
    e.preventDefault();
  //changeView('#/');
   // history.pushState(null, 'LogIn', '#/');
  });
  return divElem;
 
};

// const getDivUser = document.getElementById('user-thinking');
//     const user = data.user;
//     getDivUser.innerHTML = user;
//     const getDivThinking = document.getElementById('space-thinking');
//     const thinking = data.thinking;
//     getDivThinking.innerHTML = thinking;
