import React from 'react';
import {Link} from 'react-router-dom';
import books from 'data/books';

const Navbar = () => {
	let booksList = books.map((e) => (
		<Link to={`/book/${e.slug}`}>{e.title}</Link>
	));

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
				<li className='nav-item nav-link'>
					{ booksList }
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

