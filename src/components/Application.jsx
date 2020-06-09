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
		const unsubscribe = firestore.collection('posts').onSnapshot((snapshot) => {
			const posts = snapshot.docs.map(collectIdsAndDocs);
			setState({ posts });
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const handleCreate = async (post) => {
		const docRef = await firestore.collection('posts').add(post);
		const doc = await docRef.get();
		const newPost = collectIdsAndDocs(doc);
		setState({ ...state, posts: [newPost, ...posts] });
	};

	const handleRemove = async (id) => {
		const postsClone = { ...state };
		await firestore.doc(`posts/${id}`).delete();
		const posts = postsClone.posts.filter((post) => post.id !== id);
		setState({ ...state, posts });
	};

	return (
		<main className="Application">
			<h1>Think Piece</h1>
			<Posts posts={posts} onCreate={handleCreate} onRemove={handleRemove} />
		</main>
	);
};

export default Application;
