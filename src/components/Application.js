import Authentication from './Authentication';
import Posts from './Posts';
import React from 'react';

const Application = () => {
	return (
		<main className="Application">
			<h1>Think Piece</h1>
			<Authentication />
			<Posts />
		</main>
	);
};

export default Application;
