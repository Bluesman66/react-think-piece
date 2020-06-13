import React, { createContext, useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			const user = await createUserProfileDocument(userAuth);
			setUser(user);
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
