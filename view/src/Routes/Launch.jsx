const Launch = (props) => {
	const { planets, handleSubmit, launchAdded} = props;

	const today = new Date().toISOString().split("T")[0];
	
	return (
		<div className="w-2/3 p-6 border-2 mt-6 mx-auto">
			<p className="text-2xl">Schedule a mission launch for interstellar travel to one of the kepler Exoplanets.</p>
			<p className="text-2xl mt-3">Only confirmed planets matching the following criteris are available for the earliest scheduled missions:</p>

			<ul className="text-2xl mt-3 list-disc pl-8">
				<li>Planetary radius &#60; 1.6 times Earth's radius</li>
				<li>Effective stellar flux &#60; 0.36 times Earth's value and &#60; 1.11 times Earth's value</li>
			</ul>
			
			<form 
				className="text-xl mt-4 w-7/12 grid grid-cols-2 gap-3"
				onSubmit={handleSubmit}
				>
				<label htmlFor="launch-date">Launch Date</label>
				<input 
					className="text-black text-lg px-2 font-medium"
					type="date" 
					id="launch-day" 
					name="launch-day" 
					min={today} 
					max="2030-12-31" 
					defaultValue={today} 
				/>
				<label htmlFor="mission-name">Mission Name</label>
				<input 
					className="text-black text-lg px-2 font-medium"
					type="text"
					id="mission-name"
					name="mission-name"
					defaultValue="Earth 2.0"
				/>
				<label htmlFor="rocket-name">Rocket Name</label>
				<input 
					className="text-black text-lg px-2 font-medium"
					type="text"
					id="rocket-name"
					name="rocket-name"
					defaultValue="Explorer IS1"
				/>
				<label htmlFor="planets-selector">Destination Exoplanet</label>
				<select className="text-black text-lg px-2 font-medium" id="planets-selector" name="planets-selector">
					{planets.map((planetName) => {
						return (
							<option 
								value={planetName} 
								key={planetName}>
								{planetName}
							</option>
						)
					})}
				</select>
				<button
					className="text-green px-0 py-2 border-green border-2"
					type="submit">
					Launch Mission
				</button>
				{launchAdded ? <p className="mt-2 ml-8">Success</p> : <p></p>}
			</form>
		</div>
	)
}

// export { Launch, launchAdded }
export { Launch };
