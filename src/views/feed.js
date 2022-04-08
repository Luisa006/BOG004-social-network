// eslint-disable-next-line
import { changeView } from "../view-controler/router.js";
import { savePost, deletePost, getPosts, editPost,  } from '../view-controler/controllers.js';

export default () => {
  let editFeed = false;
  let idFeed = '';
  let likeFeed = '';
  const viewHome = `
    <form id="fromPost">
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
        <textarea disabled id=${element.id}> ${element.post} </textarea>
        <button class="delete" data-set=${element.id}> Eliminar </button>   
        <button class="edit" data-id='${element.id}', '${element.post}'> Editar </button>  
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
    const btnEdit = containerPost.querySelectorAll('.edit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async ({ target }) => {
        console.log(target.dataset);
        const doc = await editPost(target.dataset.id);
        document.querySelector(`#${target.dataset.id}`).removeAttribute('disabled');

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
