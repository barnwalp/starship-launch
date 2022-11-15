import { httpGetLaunches } from '../hooks/request';

const Upcoming = () => {
	const getLaunches = async () => {
		let launches = await httpGetLaunches();
		console.log(launches);
		return launches;
	}
	getLaunches();
	return (
		<div className="h-screen">
			<div className="w-2/3 p-6 border-2 mt-6 mx-auto">
				<p className="text-2xl">Upcoming missions including both SpaceX launches and newly scheduled ISRO GSLV-III rockets.</p>
				<p className="text-2xl mt-3">Warning! Clicking on the X aborts the mission.</p>
				{/*}Table Header - No Date Mission Rocket Destination{*/}
			</div>
		</div>
	)
}

export default Upcoming;
