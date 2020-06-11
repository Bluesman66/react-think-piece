import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase';

import Authentication from './Authentication';
import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';

const Application = () => {
	const [posts, setPosts] = useState([]);
	const [user, setUser] = useState(null);

	useEffect(() => {
		console.log('useEffect');
		const unsubscribeFromFirestore = firestore
			.collection('posts')
			.onSnapshot((snapshot) => {
				const posts = snapshot.docs.map(collectIdsAndDocs);
				setPosts(posts);
			});
		const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		return () => {
			unsubscribeFromFirestore();
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<main className="Application">
			<h1>Think Piece</h1>
			<Authentication user={user} />
			<Posts posts={posts} />
		</main>
	);
};

export default Application;
