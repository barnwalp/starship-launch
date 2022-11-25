const History = (props) => {
	const { launches } = props;
	const filteredLaunch = launches.filter(launch => !launch.upcoming);
	console.log(filteredLaunch);
	
	const launchTable = filteredLaunch.map((launch) => {
		return (
			<tr>
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
				<p className="text-2xl">History of mission launches including SpaceX launches starting from the year 2006.</p>
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

export default History;
