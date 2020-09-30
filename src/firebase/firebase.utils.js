import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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
  const userFriendsRef = firestore.doc(`friends/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionlData,
      });

      await userFriendsRef.set({
        r3J7O2ZdgtOqFF7JvOYfHBC5lnZ2: true,
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

  userRef.update({
    profilePhotoUrl: url,
  });

  const snapShot = await userRef.get();
  console.log('uid: ', uid, 'UserRef: ', userRef);

  console.log(snapShot.exists);

  if (snapShot.exists) {
    console.log('document data: ', snapShot.data());
  }

  return userRef;
};

export const addPost = async (data) => {
  const docRef = await firestore.collection('posts').add({
    message: data.message,
    photoUrl: data.photoUrl,
    username: data.username,
    authorProfilePhotoUrl: data.authorProfilePhotoUrl,
    authorId: data.authorId,
    isFeeling: data.isFeeling,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    comments: '0',
    likes: [],
  });

  try {
    const docAdded = await docRef;
    firestore.doc(`posts/${docAdded.id}`).update({ id: docAdded.id });
    return docRef;
  } catch (error) {
    console.log('error: ', error);
  }

  return docRef;
};

export const addLike = async (postId, userId) => {
  const postRef = await firestore.doc(`posts/${postId}`);
  postRef.update({ likes: firebase.firestore.FieldValue.arrayUnion(userId) });
};

export const addComment = async (postId, data) => {
  const docRef = await firestore.collection(`posts/${postId}/comments`);

  docRef.add({
    message: data.message,
    username: `${data.name} ${data.surname}`,
    authorProfilePhotoUrl: data.profilePhotoUrl,
    authorId: data.userId,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const addFriend = async (currentUserId, userId) => {
  const userFriendsRef = await firestore.doc(`friends/${userId}`);

  const snapShot = await userFriendsRef.get();

  try {
    userFriendsRef.update({
      [currentUserId]: null,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
