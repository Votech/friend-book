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

export const createUserProfileDocument = async (userAuth, additionlData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionlData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addUserData = async (userAuth, url) => {
  const uid = userAuth.currentUser.uid;
  const userRef = firestore.doc(`users/${uid}`);

  userRef.set(
    {
      profilePhotoUrl: url,
    },
    { merge: true }
  );

  const snapShot = await userRef.get();
  console.log('uid: ', uid, 'UserRef: ', userRef);

  console.log(snapShot.exists);

  if (snapShot.exists) {
    console.log('document data: ', snapShot.data());
  }

  return userRef;
};

export const addPost = (data) => {
  firestore.collection('posts').doc().set({
    message: data.message,
    photoUrl: data.photoUrl,
    username: data.username,
    authorProfilePhotoUrl: data.authorProfilePhotoUrl,
    authorId: data.authorId,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    comments: '0',
    likes: '0',
  });
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
