import React, {Component} from 'react';
import Request from '../../helpers/Request';

class PirateForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      ships: [],
      pirate:{
        firstName: "",
        lastName: "",
        age: 0,
        ship: null
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleShip = this.handleShip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request()
    request.get('/api/ships')
    .then((data) => {
      this.setState({ships: data})
    })
  }

  handleChange(event){
    let propertyName = event.target.name;
    let pirate = this.state.pirate;
    pirate[propertyName] = event.target.value;
    this.setState({pirate: pirate})
  }

  handleShip(event){
    const index = parseInt(event.target.value)
    const selectedShip = this.state.ships[index]
    let pirate = this.state.pirate;
    pirate['ship'] = selectedShip;
    this.setState({pirate: pirate})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.pirate)
  }

  render(){
    if(this.state.ships === 0){
      return <p>loading.... </p>
    }

    const shipOptions = this.state.ships.map((ship, index)=> {
      return<option key ={index} value={index}>{ship.name}</option>
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={this.handleChange}
          value={this.state.pirate.firstName} />

          <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={this.handleChange}
          value={this.state.pirate.lastName} />

          <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={this.handleChange}
          value={this.state.pirate.age} />

          <select name="ship" onChange={this.handleShip} defaultValue="select-ship">
          <option disabled value='select-ship'>Select a ship</option>
            {shipOptions}
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }

}
export default PirateForm
