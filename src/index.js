import './index.scss';

import { AuthProvider, PostsProvider } from './providers';

import Application from './components/Application';
import React from 'react';
import { render } from 'react-dom';

render(
	<AuthProvider>
		<PostsProvider>
			<Application />
		</PostsProvider>
	</AuthProvider>,
	document.getElementById('root')
);
