// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
import { savePost, deletePost, getPosts, editPost } from '../view-controler/controllers.js';

export default () => {
  let editFeed = false;
  let idFeed = '';
  let likeFeed = '';
  const viewHome = `
    <form id="fromPost">
    <img class="sleepyimg" src="./img/sleepybbs.png" alt="mimidos">
<textarea id="textPost" placeholder="Publica aquí"></textarea>
<button id="btnPublishPost" type="submit">Publicar</button>
</form>
    <div id="containerPost"></div> `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  const textPost = divElem.querySelector('#textPost');

  // Mostrar Post en la Pantalla
  getPosts().then((response) => {
    const containerPost = divElem.querySelector('#containerPost');
    response.forEach((element) => {
      console.log(element);
      containerPost.innerHTML += `
      <div class="stylePost">
        <h3>  ${element.id} </h3>
        <textarea disabled class='textEdit' id=${element.id}> ${element.post} </textarea>        
        <i class="fa-solid fa-trash-can" id="delete" data-set=${element.id}> </i>  
        <i class="fa-solid fa-pen-to-square" id="edit" data-id='${element.id}', '${element.post}'></i> 
        <i class="fa-solid fa-paw"></i> <span>${element.likes}</span>
        <i class="fa-solid fa-cloud-arrow-up" id="saveEdit" data-id='${element.id}', '${element.post}'></i>                 
       `;

      // Eliminar Post
      const feedPost = containerPost.querySelectorAll('#delete');
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
      // const post = divElem.querySelector('#textPost').value;
      const infoPost = {
        post: divElem.querySelector('#textPost').value,
        likes: 0,

      };
      savePost(infoPost);
    });
    // Editar Post
    const btnEdit = containerPost.querySelectorAll('#edit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async ({ target }) => {
        console.log(target.dataset);
        const doc = await editPost(target.dataset.id);
        containerPost.querySelector(`#${target.dataset.id}`).removeAttribute('disabled');
        containerPost.querySelector('#saveEdit').addEventListener('click', () => {
          const post = containerPost.querySelector('.textEdit').value;
          savePost(post);
        });
        // const postData = doc.dataset;
        // console.log(textPost);
        // // textPost.value = postData.textPost;
        editFeed = true;
      // editPost(dataset.set);
      });
    });
    // divElem.querySelector('.edit').addEventListener('click', ({ target: { dataset } }) => {
    //   console.log('editar', dataset.set);
    //   editPost(dataset.set);
    // });
  // changeView('#/');
  // history.pushState(null, 'LogIn', '#/');
  });
  return divElem;
};



/* <button class="delete" data-set=${element.id}> Eliminar </button>  */
/* <button class="edit" data-id='${element.id}', '${element.post}'> Editar </button> */
/* <button class="saveEdit" data-id='${element.id}', '${element.post}'> Guardar </button>    */
