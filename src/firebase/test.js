import firebase from 'firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

//get Collections or documents
firestore
  .collection('users')
  .doc('OCusa8SkVbhT5iryG12v')
  .collection('cartItems')
  .doc('RMiZgqSe8aaimLR8oXP7');
firestore.doc('/users/OCusa8SkVbhT5iryG12v/cartItems/RMiZgqSe8aaimLR8oXP7');
firestore.collection('/users/OCusa8SkVbhT5iryG12v/cartItems');

//firestore
firestore.collections('products');
