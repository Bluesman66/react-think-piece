import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../firebase';

const SignIn = () => {
	const [state, setState] = useState({ email: '', password: '' });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.error(error);
		}

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
