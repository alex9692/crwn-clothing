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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
