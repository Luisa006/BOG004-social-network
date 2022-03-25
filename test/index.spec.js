// importamos la funcion que vamos a testear
import { authentication } from '../src/firebase/Auth.js';
import signUp from '../src/views/signUp.js';

jest.mock('../src/firebase/firebaseImport.js');

describe('authentication', () => {
  it('debería ser una función', () => {
    expect(typeof authentication).toBe('function');
  });
  it('deberia retornar Correo Invalido para el caso auth/invalid-email', () => {
    const divElem = signUp();
    const password = divElem.querySelector('#password');
    password.value = '123456';
    const email = divElem.querySelector('#email');
    email.value = 'testgmailcom';
    console.log(password.value, email.value);
    const boton = divElem.querySelector('#btnSignUp');
    boton.dispatchEvent(new Event('click'));
    const notification = divElem.querySelector('#notification');
    return authentication.catch(() => {
      expect(notification.textContent).toBe('Correo Invalido');
    });
  });
});
