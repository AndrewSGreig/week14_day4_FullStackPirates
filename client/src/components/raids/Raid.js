import React, {Fragment} from 'react';

const Raid = (props) => {

  if(!props.raid){
    return "Loading...."
  }

  return (
      <Fragment>
        <p>
          {props.raid.location}
        </p>
        <p>
          {props.raid.loot}
        </p>
      </Fragment>
    )

}

export default Raid;
