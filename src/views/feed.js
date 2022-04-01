// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
import { savePost } from '../view-controler/controllers.js';

export default () => {
  const viewHome = `
    <h2>FEED</h2>
    <form id="fromPost">
<textarea id="textPost" placeholder="Publica aquí"></textarea>
<button id="btnPublishPost" type="submit">Publicar</button>
</form>
    <button id="btnHome">HOME</button>
    <div id="containerPost"></div> `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  divElem.querySelector('#btnPublishPost').addEventListener('click', (e) => {
    const post = divElem.querySelector('#textPost').value;
    console.log(post);
    savePost(post).then((response) => {
      console.log(response);
      const containerPost = divElem.querySelector('#containerPost');
      response.forEach((element) => {
        containerPost.innerHTML = `
    <h3> ${element.Usuario} </h3>
    <p> ${element.post} </p>
    `;
      });
    });
    e.preventDefault();
  // changeView('#/');
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
