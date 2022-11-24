import { useState, useEffect, useCallback } from 'react';
import { httpGetPlanets, httpSubmitLaunch, httpGetLaunches, httpAbortLaunch } from './hooks/request';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./Routes/Navigation";
import History from "./Routes/History";
import Upcoming from "./Routes/Upcoming";
import { Launch } from "./Routes/Launch";

const App = () => {
	const [planets, setPlanets] = useState([]);
	const [launches, setLaunches] = useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await httpGetPlanets();
			const planetList = [];
			response.map((planet) => {
				return planetList.push(planet.kepler_name);
			})
			setPlanets(planetList);
		}
		fetchData();
	}, [])

	console.log('######## launches are: ########');
	console.log(launches);

	const getLaunches = useCallback(async () => {
		let response = await httpGetLaunches();
		setLaunches(response);
	},[])

	useEffect(() => {
		getLaunches();
	}, [getLaunches]);
	
	const handleSubmit = useCallback(async (event) => {
		event.preventDefault();
		const launchDate = event.target[0].value;
		const mission = event.target[1].value;
		const rocket = event.target[2].value;
		const destination = event.target[3].value;
		await httpSubmitLaunch({
			launchDate,
			mission,
			rocket,
			destination
		})
		getLaunches();
	},[getLaunches]) 

	const handleAbort = (event) => {
		console.log(event.target);
	}

	return(
		<div className="bg-main xl:h-screen font-extralight font-dosis text-primary">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigation />}>
						<Route 
							index 
							element={
								<Launch
									planets={planets}
									handleSubmit={handleSubmit}
								/>
							} 
						/>
						<Route 
							path="upcoming" 
							element={
								<Upcoming 
									launches={launches}
									handleAbort={handleAbort}
							/>} 
						/>
						<Route path="history" element={<History />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
};

export default App;
