import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./Routes/Navigation";
import History from "./Routes/History";
import Upcoming from "./Routes/Upcoming";
import Launch from "./Routes/Launch";

// import { resources } from "./settings";

const App = () => {
	return(
		<div className="bg-main h-screen font-extralight font-dosis text-primary">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigation />}>
						<Route index element={<Launch />} />
						<Route path="upcoming" element={<Upcoming />} />
						<Route path="history" element={<History />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
};

export default App;
