import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../img/solar2.svg';

const Navigation = () => {
	return (
		<Fragment>
			<nav className="flex py-4  border-transparent border-b-primary border-b-4 text-2xl space-x-10 justify-center">
				<h3>
					<Logo className="w-8 inline-block mr-2"/> 
					Starship Launch
				</h3>
				<Link className="text-lightPrimary" to="/">Launch</Link>	
				<Link className="text-lightPrimary" to="/upcoming">Upcoming</Link>	
				<Link className="text-lightPrimary" to="/history">History</Link>	
			</nav>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;

