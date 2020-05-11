import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import About from 'pages/About';
import Book from 'components/Book'
import Documentation from 'pages/Documentation';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/documentation'>
						<Documentation />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
				<Switch>
					<Route path={`/book/:bookSlug`}>
						<Book />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;