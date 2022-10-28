import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () => {
	return (
		<Fragment>
			<nav className="flex justify-between">
				<h3>Starship Launch</h3>
				<Link className="uppercase" to="/">Launch</Link>	
				<Link to="/upcoming">Upcoming</Link>	
				<Link to="/history">History</Link>	
			</nav>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
