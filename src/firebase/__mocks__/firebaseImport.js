export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => console.log('aaaaaaaaaaaaaaaaaaaaaaaa') || Promise.reject(new Error({code: 'auth/invalid-email'})));
export const sendEmailVerification = () => Promise.resolve({});
export const signInWithEmailAndPassword = () => Promise.resolve({});

