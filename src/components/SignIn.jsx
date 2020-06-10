import React, { useState } from 'react';

import { signInWithGoogle } from '../firebase';

const SignIn = () => {
	const [state, setState] = useState({ email: '', password: '' });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setState({ ...state, email: '', password: '' });
	};

	const { email, password } = state;

	return (
		<form className="SignIn" onSubmit={handleSubmit}>
			<h2>Sign In</h2>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={email}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={password}
				onChange={handleChange}
			/>
			<input type="submit" value="Sign In" />
			<button onClick={signInWithGoogle}>Sign In With Google</button>
		</form>
	);
};

export default SignIn;
