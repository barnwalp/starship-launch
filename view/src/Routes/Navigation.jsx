import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () => {
	return (
		<Fragment>
			<div>
				<h3>Navigation</h3>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
