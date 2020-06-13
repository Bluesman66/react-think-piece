import React, { useContext } from 'react';

import { AuthContext } from '../providers';
import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SignInAndSignUp';

const Authentication = ({ loading }) => {
	const user = useContext(AuthContext);
	if (loading) return null;

	return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
