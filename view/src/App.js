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
	const [launchAdded, setLaunchAdded] = useState(false);
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await httpGetPlanets();
			const planetList = [];
			response.map((planet) => {
				return planetList.push(planet.keplerName);
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
		setLaunchAdded(true);
		setTimeout(() => {
			setLaunchAdded(false);
		}, 800)
		getLaunches();
	},[getLaunches]) 

	const handleAbort = (async (id) => {
		await httpAbortLaunch(id);
		getLaunches();
	})

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
									launchAdded={launchAdded}	
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
						<Route 
							path="history" 
							element={
								<History
									launches={launches}
								/>
							} 
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
};

export default App;
