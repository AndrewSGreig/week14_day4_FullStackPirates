import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShipList from '../components/ships/ShipList';
import Request from '../helpers/Request';

class ShipContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      ships: []
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/ships')
    .then((data) => {
      this.setState({ships: data})
    })
  }

  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route render={(props)=> {
              return <ShipList ships={this.state.ships}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}
export default ShipContainer
