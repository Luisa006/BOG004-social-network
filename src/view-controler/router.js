import { components } from '../views/index.js'

const changeView = (route) => {
    const container = document.getElementById('container')
    container.innerHTML = '';
    switch (route) {
        case '#/': 
        { return container.appendChild(components.home()) }
        case '#/signUp':
         { return container.appendChild(components.signUp()) }   
         case '#/logIn':
            { return container.appendChild(components.logIn()) }      
         case '#/feed':
            { return container.appendChild(components.feed()) }       
            
        default:
            break;
    }
console.log(route)
}

export { changeView }