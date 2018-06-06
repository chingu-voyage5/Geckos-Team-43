import React from 'react';
import { MyContext } from '../containers/context.js';

const UserProfile = () => (
		<MyContext.Consumer>
		{
			user => (
				<div className="user-profile">
					<div className="nav-user">
					<h1>{user.state.name}</h1>
					<button>Edit Profile</button>
					</div>
					<div className="user-info">
						<p><b>Location:</b><br/>New York City</p>
						<p><b>Email:</b><br/>{user.state.email}</p>
						<p><b>Leetup member since:</b><br/> April 1 2018</p>
					</div>
					<div className="img-container">
						<img src="http://via.placeholder.com/200x200" alt=""/>
					</div>
					<div className="interests">
						<h3>Interests</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, consectetur magnam, animi harum ut eveniet!</p>
					</div>
					<div className="user-bio">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				)
		}
		</MyContext.Consumer>
	)

export default UserProfile