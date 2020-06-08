import React, { useEffect, useState } from 'react';

import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';
import { firestore } from '../firebase';

const Application = () => {
	const initialState = {
		posts: [],
	};

	const [state, setState] = useState(initialState);
	const { posts } = state;

	useEffect(() => {
		const getSnapshotAsync = async () => {
			const snapshot = await firestore.collection('posts').get();
			const posts = snapshot.docs.map(collectIdsAndDocs);
			setState({ posts });
		};
		getSnapshotAsync();
	}, []);

	const handleCreate = async (post) => {
    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();
    const newPost = collectIdsAndDocs(doc);
		setState({ ...state, posts: [newPost, ...posts] });
	};

	return (
		<main className="Application">
			<h1>Think Piece</h1>
			<Posts posts={posts} onCreate={handleCreate} />
		</main>
	);
};

export default Application;
