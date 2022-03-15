export default () => {
  const viewDifferent = `
    <h2>404</h2>
    <h1>Pagina no encontrada</h1>
    <p>El archivo no se encontro en el sitio web. Por favor, compruebe la URL para continuar</p>
    `;

  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'message');
  divElem.innerHTML = viewDifferent;
  return divElem;
};
