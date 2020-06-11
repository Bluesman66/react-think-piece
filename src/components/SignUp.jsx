import React, { useState } from 'react';

import { auth } from '../firebase';

const SignUp = () => {
	const [state, setState] = useState({
		displayName: '',
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password, displayName } = state;
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			user.updateProfile({ displayName });
		} catch (error) {
			console.error(error);
		}

		setState({ ...state, displayName: '', email: '', password: '' });
	};

	const { displayName, email, password } = state;

	return (
		<form className="SignUp" onSubmit={handleSubmit}>
			<h2>Sign Up</h2>
			<input
				type="text"
				name="displayName"
				placeholder="Display Name"
				value={displayName}
				onChange={handleChange}
			/>
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
			<input type="submit" value="Sign Up" />
		</form>
	);
};

export default SignUp;
