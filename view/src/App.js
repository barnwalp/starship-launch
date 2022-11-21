import { useState, useEffect } from 'react';
import { httpGetPlanets, httpSubmitLaunch } from './hooks/request';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./Routes/Navigation";
import History from "./Routes/History";
import Upcoming from "./Routes/Upcoming";
import { Launch } from "./Routes/Launch";

const App = () => {
	const [planets, setPlanets] = useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await httpGetPlanets();
			// console.log(response);
			const planetList = [];
			response.map((planet) => {
				// console.log(planet.kepler_name);
				planetList.push(planet.kepler_name);
			})
			// console.log(planetList);
			setPlanets(planetList);
		}
		fetchData();
	}, [])
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const callhttpSubmitLaunch = async () => {
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
		}
		callhttpSubmitLaunch();
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
						<Route path="upcoming" element={<Upcoming />} />
						<Route path="history" element={<History />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
};

export default App;
