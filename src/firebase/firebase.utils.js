import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA5TtA8XKkGcsnfrg6utvR77nJnQ90_ZgQ',
  authDomain: 'friend-book-73017.firebaseapp.com',
  databaseURL: 'https://friend-book-73017.firebaseio.com',
  projectId: 'friend-book-73017',
  storageBucket: 'friend-book-73017.appspot.com',
  messagingSenderId: '233487963998',
  appId: '1:233487963998:web:243635599dd10ec4c6a1cf',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
