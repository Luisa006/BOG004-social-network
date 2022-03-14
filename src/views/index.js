// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
import Home from './home.js'
import signUp from './signUp.js'
import logIn from './logIn.js'
import feed from './feed.js'
import Different from './404.js'

const components = {
    home: Home,
    signUp: signUp,
    logIn: logIn,
    feed: feed,
    different: Different
    
}

export { components };
