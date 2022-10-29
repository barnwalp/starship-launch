const Launch = () => {
	return (
		<div className="w-2/3 p-6 border-2 mt-6 mx-auto">
			<p className="text-2xl">Schedule a mission launch for interstellar travel to one of the kepler Exoplanets.</p>
			<p className="text-2xl mt-3">Only confirmed planets matching the following criteris are available for the earliest scheduled missions:</p>

			<ul className="text-2xl mt-3 list-disc pl-8">
				<li>Planetary radius &#60; 1.6 times Earth's radius</li>
				<li>Effective stellar flux &#60; 0.36 times Earth's value and &#60; 1.11 times Earth's value</li>
			</ul>
		</div>
	)
}

export default Launch;
