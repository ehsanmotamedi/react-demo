import React, { Component } from 'react';
import './App.css';
import Form from './Components/Molecules/Form/Form'
import Person from './Person/Person'
import Persons from './Person/Persons'

class App extends Component {
  state = {
    person: {name: ""},
    random: -1
  }
newRandomValue = () => {
  return Math.floor(Math.random()*(Persons.length));
}
newPersonHandler = () => {
  // Set a new random value as the current
  let random = this.state.random;

  // Check to see if random is different
  while (random === this.state.random) {
    // Set a new random value
    random = this.newRandomValue();
  }
  // Update the state
  this.setState(Object.assign(Persons[random], {random: random}));
}
render() {
  let formProperties = {
    input: {
      label:'fullName',
      field:'What\'s your full name?'
    },
    select: {
      label:'newNameType',
      field:'What name generator would you like?'
    },
    button: {
      text: 'Generate!'
    }
  };
  return (
    <div className='App'>
      <div className='Form'>
        <Form properties={formProperties} />
      </div>
      <div className='Cool'>
        <button onClick={this.newPersonHandler}>Who's cool?</button>
        <Person name={this.state.person.name} />
      </div>
    </div>
  );
}
}

export default App;
