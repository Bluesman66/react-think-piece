import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyB10OBsbwK59Z6vyO5mWBWPuTvV8Lei5Kg',
	authDomain: 'think-piece-db990.firebaseapp.com',
	databaseURL: 'https://think-piece-db990.firebaseio.com',
	projectId: 'think-piece-db990',
	storageBucket: 'think-piece-db990.appspot.com',
	messagingSenderId: '464115239382',
	appId: '1:464115239382:web:23da7c873854145ae87c77',
	measurementId: 'G-RS3M1K2DDL',
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
