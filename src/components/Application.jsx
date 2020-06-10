import React, { useEffect, useState } from 'react';

import Authentication from './Authentication';
import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';
import { firestore } from '../firebase';

const Application = () => {
	const initialState = {
		posts: [],
		user: null,
	};

	const [state, setState] = useState(initialState);
	const { posts, user } = state;

	useEffect(() => {
		const unsubscribe = firestore.collection('posts').onSnapshot((snapshot) => {
			const posts = snapshot.docs.map(collectIdsAndDocs);
			setState({ posts });
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<main className="Application">
			<h1>Think Piece</h1>
			<Authentication user={user}/>
			<Posts posts={posts} />
		</main>
	);
};

export default Application;
