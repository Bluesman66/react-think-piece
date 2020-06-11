import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB7TlaopJ49iFwu_Y90he84BnVN6xvCfzM",
  authDomain: "pai-think-piece.firebaseapp.com",
  databaseURL: "https://pai-think-piece.firebaseio.com",
  projectId: "pai-think-piece",
  storageBucket: "pai-think-piece.appspot.com",
  messagingSenderId: "734428543358",
  appId: "1:734428543358:web:40bd2228314d3b5ff09b2f"
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
