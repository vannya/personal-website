import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (): JSX.Element => {
	return (
		<header className='header-wrapper'>
			<div className='header'>
				<div className='header--name'>Van Tabbert</div>
				<nav>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/resume'>Resume</NavLink>
				</nav>
			</div>
		</header>
	);
};
