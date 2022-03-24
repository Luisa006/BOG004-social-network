// importamos la funcion que vamos a testear
import { authentication } from '../src/firebase/Auth.js';

jest.mock('../src/firebase/firebaseImport.js');

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof authentication).toBe('function');
  });
});
