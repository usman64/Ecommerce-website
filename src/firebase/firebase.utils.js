import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAHsiJvHjXgAQV8G1JktUZOW22r0TPj3L8',
  authDomain: 'crwn-clothing-db-f30dd.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-f30dd.firebaseio.com',
  projectId: 'crwn-clothing-db-f30dd',
  storageBucket: 'crwn-clothing-db-f30dd.appspot.com',
  messagingSenderId: '155825686061',
  appId: '1:155825686061:web:e75e9fefc441b6a7531aa4',
  measurementId: 'G-YDEVKKPYZ2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //make new object of class GoogleAuthProvider
provider.setCustomParameters({ prompt: 'select_account' }); //use setCustomProvider method

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
