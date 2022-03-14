export default () => {
  const viewSignUp = `
  <section id="pag2">
  <h2>REGÍSTRATE</h2>
  <form class="form">
    <input id="email" class="signUp" type="email"  placeholder="e-mail">
    <input id="user" class="signUp" type="text"  placeholder="usuario">
    <input id="password" class="signUp" type="password" placeholder="contraseña">
    <button id="btnSignUp">REGÍSTRATE</button>
    <img class="btngoogle" src="img/gg-removebg-preview.png" alt="logoGoogle">
  </form>
    <h4>¿Ya tienes cuenta? Inicia Sesión </h4>
    <img class="dog-cat" src="./img/image (2).png" alt="dog-Cat">
</section>`

  const divElem = document.createElement('div')
  divElem.innerHTML = viewSignUp;

  return divElem;
}