/* eslint-disable semi */

// eslint-disable-next-line
import Home from './home.js'
// eslint-disable-next-line
import signUp from './signUp.js'
// eslint-disable-next-line
import logIn from './logIn.js'
// eslint-disable-next-line import/no-cycle
import feed from './feed.js'
import Different from './404.js';

const components = {
  home: Home,
  signUp: signUp,
  logIn: logIn,
  feed: feed,
  different: Different,
};

export { components };
