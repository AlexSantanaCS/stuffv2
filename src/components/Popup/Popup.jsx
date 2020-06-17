import React from 'react'

function Popup({ selected }) {
    console.log("test");
    console.log({selected})
	return (
		<section className="popup">
			<div className="content">
				<h2>{selected.name}</h2>
				<p className="rating">test</p>
				<div className="plot">
					<p>Test</p>
				</div>
			</div>
		</section>
	)
}

export default Popup