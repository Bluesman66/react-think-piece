import React, { createContext, useEffect, useState } from 'react';

import { collectIdsAndDocs } from '../utilities';
import { firestore } from '../firebase';

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribeFromFirestore = firestore
			.collection('posts')
			.onSnapshot((snapshot) => {
				const posts = snapshot.docs.map(collectIdsAndDocs);
				setPosts(posts);
				setLoading(false);
			});
		return () => {
			unsubscribeFromFirestore();
		};
	}, []);

	return (
		<PostsContext.Provider value={{ posts, loading }}>
			{children}
		</PostsContext.Provider>
	);
};

export default PostsProvider;
