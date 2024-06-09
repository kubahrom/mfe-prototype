import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration TODO: make it as env
const firebaseConfig = {
  apiKey: process.env.APP_FIREBASE_API_KEY,
  authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
