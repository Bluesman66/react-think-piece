import React, { useContext } from 'react';

import AddPost from './AddPost';
import Post from './Post';
import { PostsContext } from '../providers';

const Posts = ({ loading }) => {
	const posts = useContext(PostsContext);
	if (loading) return null;

	return (
		<section className="Posts">
			<AddPost />
			{posts.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</section>
	);
};

export default Posts;
