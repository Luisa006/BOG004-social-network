// importamos la funcion que vamos a testear
// import { async } from 'regenerator-runtime';
import { authentication } from '../src/firebase/Auth.js';
import signUp from '../src/views/signUp.js';

jest.mock('../src/firebase/firebaseImport.js');

describe('authentication', () => {
  it('debería ser una función', () => {
    // expect(typeof authentication).toBe('function');
  });
  it.only('deberia retornar Correo Invalido para el caso auth/invalid-email', (done) => {
    //const auth = null;
    const email = 'testgmailcom';
    const password = '123456';
    // createUserWithEmailAndPassword (auth, email, password).catch((error) => {
    //  expect(error.code).toBe('auth/invalid-email');
    // });

    expect.assertions(1);
    const divElem = signUp();
    // const password = divElem.querySelector('#password');
    // password.value = '123456';
    // const email = divElem.querySelector('#email');
    // email.value = 'testgmailcom';
    // console.log(password.value, email.value);
    // const boton = divElem.querySelector('#btnSignUp');
    // boton.dispatchEvent(new Event('click'));
    const notification = divElem.querySelector('#notification');

    authentication(email, password, divElem)
      .then(() => {
        console.log('aaaaaaaaaaaaaaaaaaaa', notification.textContent)
        done();
      });
  });
});
