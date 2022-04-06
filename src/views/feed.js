// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
import { savePost, deletePost, getPosts, editPost } from '../view-controler/controllers.js';

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

  // Mostrar Post en la Pantalla
  getPosts().then((response) => {
    const containerPost = divElem.querySelector('#containerPost');
    response.forEach((element) => {
      console.log(element);
      containerPost.innerHTML += `
        <h3>  ${element.id} </h3>
        <p> ${element.post} </p>
        <button class="delete" data-set=${element.id}> Eliminar </button>   
        <button class="edit" data-set='${element.id}', '${element.post}'> Editar </button>  
       `;
      // Eliminar Post
      const feedPost = containerPost.querySelectorAll('.delete');
      feedPost.forEach((item) => {
        item.addEventListener('click', ({ target: { dataset } }) => {
          console.log(feedPost);
          console.log('boton borrar', dataset.set);
          deletePost(dataset.set);
        });
      });
    });
    // Publicar Post
    divElem.querySelector('#btnPublishPost').addEventListener('click', () => {
      const post = divElem.querySelector('#textPost').value;
      savePost(post);
    });
    // Editar Post
    divElem.querySelector('.edit').addEventListener('click', ({ target: { dataset } }) => {
      console.log('editar', dataset.set);
      editPost(dataset.set);
    });
  // changeView('#/');
  // history.pushState(null, 'LogIn', '#/');
  });
  return divElem;
};
