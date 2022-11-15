import { useState, useEffect } from 'react';
import { httpGetLaunches } from '../hooks/request';

const Upcoming = () => {
	const [launches, setLaunches] = useState([]);

	useEffect(() => {
		const getLaunches = async () => {
			let response = await httpGetLaunches();
			setLaunches(response);
		}
		getLaunches();
	}, [])
	console.log(launches);
	const launchTable = launches.map((launch) => {
		return (
			<tr>
				<td>{launch.flightNumber}</td>
				<td>{launch.launchDate}</td>
				<td>{launch.mission}</td>
				<td>{launch.rocket}</td>
				<td>{launch.destinanation}</td>
			</tr>
		)
	})
	return (
		<div className="h-screen">
			<div className="w-2/3 p-6 border-2 mt-6 mx-auto">
				<p className="text-2xl">Upcoming missions including both SpaceX launches and newly scheduled ISRO GSLV-III rockets.</p>
				<p className="text-2xl mt-3">Warning! Clicking on the X aborts the mission.</p>
				<table>
					<tr>
						<th>No</th>
						<th>Date</th>
						<th>Mission</th>
						<th>Rocket</th>
						<th>Destination</th>
					</tr>
					{launchTable}
				</table>
			</div>
		</div>
	)
}

export default Upcoming;
