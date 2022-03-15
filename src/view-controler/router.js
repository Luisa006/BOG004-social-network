// eslint-disable-next-line
import { components } from '../views/index.js'

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
      container.appendChild(components.home());
      break;
    case '#/':
      container.appendChild(components.home());
      break;
    case '#/signUp':
      container.appendChild(components.signUp());
      break;
    case '#/logIn':
      container.appendChild(components.logIn());
      break;
    case '#/feed':
      container.appendChild(components.feed());
      break;
    default:
      break;
  }
// console.log(route)
};

export { changeView };
