import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_WBLvNIVWdKMYYv9KCo0-SK6PP-X7KbU",
  authDomain: "crwn-clothing-react-104e3.firebaseapp.com",
  projectId: "crwn-clothing-react-104e3",
  storageBucket: "crwn-clothing-react-104e3.appspot.com",
  messagingSenderId: "957830776057",
  appId: "1:957830776057:web:558d0b33c14abd82058e28",
  measurementId: "G-EZ93QF9YD4",
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, data) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  data.forEach((item) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => ({
    id: doc.id,
    routeName: encodeURI(doc.data().title.toLowerCase()),
    ...doc.data(),
  }));

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
