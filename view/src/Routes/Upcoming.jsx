const Upcoming = (props) => {
	const { filteredLaunch } = props;

	const launchTable = filteredLaunch.map((launch) => {
		return (
			<tr className="">
				<td className="font-light py-1 text-center">{launch.flightNumber}</td>
				<td className="font-light text-center">{launch.launchDate}</td>
				<td className="font-light text-center">{launch.mission}</td>
				<td className="font-light text-center">{launch.rocket}</td>
				<td className="font-light text-center">{launch.destination}</td>
			</tr>
		)
	})

	return (
		<div className="h-screen">
			<div className="w-2/3 p-6 border-2 mt-6 mx-auto">
				<p className="text-2xl">Upcoming missions including both SpaceX launches and newly scheduled ISRO GSLV-III rockets.</p>
				<p className="text-2xl mt-3">Warning! Clicking on the X aborts the mission.</p>
				<table className="mt-3 w-full">
					<tr className="border-b-2 text-lg">
						<th className="">No</th>
						<th className="">Date</th>
						<th className="">Mission</th>
						<th className="">Rocket</th>
						<th className="">Destination</th>
					</tr>
					{launchTable}
				</table>
			</div>
		</div>
	)
}

export default Upcoming;
