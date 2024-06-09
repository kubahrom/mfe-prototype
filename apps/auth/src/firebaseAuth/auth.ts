import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth/cordova';
import { auth } from './config';
import { User, onAuthStateChanged } from 'firebase/auth';

export const signup = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e) {
    const errorMessage = (e as Error).message;
    throw new Error(errorMessage || 'Něco se pokazilo!');
  }
};

export const login = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e) {
    const errorMessage = (e as Error).message;
    throw new Error(errorMessage || 'Něco se pokazilo!');
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    const errorMessage = (e as Error).message;
    throw new Error(errorMessage || 'Něco se pokazilo!');
  }
};

export const observeAuthState = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
