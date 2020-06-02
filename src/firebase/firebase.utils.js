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

//firestore returns us either a QueryRefrenece or a snapshot
//firestore ALWAYS return us an object even if nothing results of the query
//Query Reference object doesn't have data, but properties that tell us info about query
//Snapshot Object has data

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //if

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //make new object of class GoogleAuthProvider
provider.setCustomParameters({ prompt: 'select_account' }); //use setCustomProvider method

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const getProducts = async () => {
  const productsRef = firestore.collection('products');
  const products = await productsRef.get();

  console.log(products.docs.map(async (doc) => await doc.ref.get()));
};

export default firebase;
