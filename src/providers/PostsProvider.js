import React, { createContext, useEffect, useState } from 'react';

import { collectIdsAndDocs } from '../utilities';
import { firestore } from '../firebase';

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const unsubscribeFromFirestore = firestore
			.collection('posts')
			.onSnapshot((snapshot) => {
				const posts = snapshot.docs.map(collectIdsAndDocs);
				setPosts(posts);
			});
		return () => {
			unsubscribeFromFirestore();
		};
	}, []);

	return (
		<PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
	);
};

export default PostsProvider;
