import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor() {
    super();

    this.state = {
      vehicles: [],
      value: '',
      name: '',
      newPilot: ''
    }
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange(evt) {
    this.setState({
      name: evt.target.value
    })
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleSubmit(evt) {
    this.setState({
      newPilot: this.state.name,
      name: ''
    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentDidMount() {
    fetch(`https://swapi.co/api/vehicles/`)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log('Data from SWAPI', results.results);
        this.setState({ vehicles: results.results });
      });
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    console.log('render', this.state);
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

    return (
      <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
         <div className='header'>
          <h1>Star Wars</h1>
          <hr />
          <h3>The Vehicles of Star Wars</h3>
         </div>

         <div className='name-header'>
          <h2>What is your name, pilot?</h2>
          <input value={this.state.name} onChange={(evt) => this.handleNameChange(evt)} />
          <button onClick={(evt) => this.handleSubmit(evt)}>submit</button>
          <h2 className='pilot-name'>{this.state.newPilot}</h2>
         </div>

         <div className='card-rack'>
           {this.state.vehicles.map((vehicle, i) => {
             return (
               <div className='card' key={i}>
                 <h3>{vehicle.name}</h3>
                 <h5>Model: {vehicle.model}</h5>
                 <div className='specs'>
                   <h5>Specs</h5>
                   <p>Manufacturer: {vehicle.manufacturer}</p>
                   <p>Class: {vehicle.vehicle_class}</p>
                   <p># of Passengers: {vehicle.passengers}</p>
                   <p># of Crew: {vehicle.crew}</p>
                   <p>Length: {vehicle.length} m</p>
                   <p>Max Speed: {vehicle.max_atmosphering_speed} km/h</p>
                   <p>Cargo Capacity: {vehicle.cargo_capacity} kg</p>
                 </div>
               </div>
             )
           })}
         </div>
      </div>
    );
  }
}

export default App;
