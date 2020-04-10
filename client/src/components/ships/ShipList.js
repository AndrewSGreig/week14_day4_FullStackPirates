import React from 'react';
import Ship from './Ship.js';


const ShipList = (props) => {
	if(props.ships.length === 0){
		return (<p>Loading........</p>)
	}

	const ships = props.ships.map((ship, index) =>{
		return (
			<li key={index} className ="component-item">
				<div className="component">
					<Ship ship={ship} />
				</div>
			</li>
		)
	})

	return (
		<ul className="component-list">
			{ships}
		</ul>

	)
}

export default ShipList;
