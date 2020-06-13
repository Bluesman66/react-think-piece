import './index.scss';

import { AuthProvider, PostsProvider } from './providers';

import Application from './components/Application';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';

render(
	<BrowserRouter>
		<AuthProvider>
			<PostsProvider>
				<Application />
			</PostsProvider>
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
