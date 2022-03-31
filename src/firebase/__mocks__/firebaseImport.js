export const getAuth = () => Promise.resolve({});
// eslint-disable-next-line prefer-promise-reject-errors
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.reject({code: 'auth/invalid-email'}));
export const sendEmailVerification = () => Promise.resolve({});
export const signInWithEmailAndPassword = () => Promise.resolve({});

