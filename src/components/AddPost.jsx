import React, { useState } from 'react';
import { auth, firestore } from '../firebase';

const AddPost = () => {
	const [state, setState] = useState({ title: '', content: '' });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const { title, content } = state;
		const { uid, displayName, email, photoURL } = auth.currentUser || {};

		const post = {
			title,
			content,
			user: {
				uid,
				displayName,
				email,
				photoURL,
			},
			favorites: 0,
			comments: 0,
			createdAt: new Date(),
		};

		firestore.collection('posts').add(post);

		setState({ ...state, title: '', content: '' });
	};

	return (
		<form onSubmit={handleSubmit} className="AddPost">
			<input
				type="text"
				name="title"
				placeholder="Title"
				value={state.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="content"
				placeholder="Body"
				value={state.content}
				onChange={handleChange}
			/>
			<input className="create" type="submit" value="Create Post" />
		</form>
	);
};

export default AddPost;
