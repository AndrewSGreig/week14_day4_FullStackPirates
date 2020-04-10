import React from 'react';
import Raid from './Raid.js';


const RaidList = (props) => {

	if(props.raids.length === 0){
		return (<p>Loading........</p>)
	}

	const raids = props.raids.map((raid, index) =>{
		return (
			<li key={index} className ="component-item">
				<div className="component">
					<Raid raid={raid} />
				</div>
			</li>
		)
	})

	return (
		<ul className="component-list">
			{raids}
		</ul>

	)
}
	
 export default RaidList;
