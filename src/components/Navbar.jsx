import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<ul>
				<li className='nav-item nav-link'>
					<Link to='/'>Home</Link>
				</li>
				<li className='nav-item nav-link'>
					<Link to='/about'>About</Link>
				</li>
				<li className='nav-item nav-link'>
					<Link to='/documentation'>Documentation</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

