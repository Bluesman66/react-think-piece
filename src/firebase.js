import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyB7TlaopJ49iFwu_Y90he84BnVN6xvCfzM',
	authDomain: 'pai-think-piece.firebaseapp.com',
	databaseURL: 'https://pai-think-piece.firebaseio.com',
	projectId: 'pai-think-piece',
	storageBucket: 'pai-think-piece.appspot.com',
	messagingSenderId: '734428543358',
	appId: '1:734428543358:web:40bd2228314d3b5ff09b2f',
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
	if (!user) return;
	// Get a reference to the place in the database where a user profile might be
	const userRef = firestore.doc(`users/${user.uid}`);
	// Go and fetch the document from that location
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email, photoURL } = user;
		const createdAt = Date.now();
		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error('Error creating user: ', error);
		}
	}

	return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
	if (!uid) return;
	try {
		const userDocument = await firestore.collection('users').doc(uid).get();
		return { uid, ...userDocument.data() };
	} catch (error) {
		console.error('Error getting user document: ', error);
	}
};

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
