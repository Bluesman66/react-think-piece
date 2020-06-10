import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase';

import Authentication from './Authentication';
import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';

const Application = () => {
	const initialState = {
		posts: [],
		user: null,
	};

	const [state, setState] = useState(initialState);
	const { posts, user } = state;

	useEffect(() => {
		const unsubscribeFromFirestore = firestore
			.collection('posts')
			.onSnapshot((snapshot) => {
				const posts = snapshot.docs.map(collectIdsAndDocs);
				setState({ ...state, posts });
			});
		const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setState({ ...state, user });
		});
		return () => {
			unsubscribeFromFirestore();
			unsubscribeFromAuth();
		};
	}, [state]);

	return (
		<main className="Application">
			<h1>Think Piece</h1>
			<Authentication user={user} />
			<Posts posts={posts} />
		</main>
	);
};

export default Application;
