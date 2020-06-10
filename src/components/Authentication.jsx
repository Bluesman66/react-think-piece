import CurrentUser from './CurrentUser';
import React from 'react';
import SignInAndSignUp from './SignInAndSignUp';

const Authentication = ({ user, loading }) => {
	if (loading) return null;

	return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
