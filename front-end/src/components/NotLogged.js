import React from 'react';
import { Link } from 'react-router-dom';

const NotLogged = () => (
	<div>
		<h3>You are not loggged in</h3>
		<Link className="btn" to='/login'>Login</Link>
	</div>
	)

export default NotLogged;