import AddPost from './AddPost';
import Post from './Post';
import React from 'react';

const Posts = ({ posts, loading }) => {
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
