import React, { createContext, useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			const user = await createUserProfileDocument(userAuth);
			setUser(user);
			setLoading(false);
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
