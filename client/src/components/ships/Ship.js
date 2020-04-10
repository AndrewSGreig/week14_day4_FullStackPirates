import React, {Fragment} from 'react';

const Ship = (props) => {
	if(!props.ship){
    return "Loading...."
  }

  return (
    <Fragment>
      <p>
        {props.ship.name}
      </p>
       	
    </Fragment>
  )



		// return (
		// 	<div className="component">
		// 			<p className="name">
		// 				{props.ship.name}
		// 			</p>
		// 	</div>
		// )
	}

export default Ship;
