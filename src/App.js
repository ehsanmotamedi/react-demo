import React, { Component } from 'react';
import './App.css';
import Form from './Components/Molecules/Form/Form';
import Result from './Components/Molecules/Result/Result';

class App extends Component {
  state = {
    fullName: '',
    nameGenerator: ''
  }
fullName = '';
nameGenerator = '';
changeHandler = (e) => {
  console.log('Something changed: ' + e.target.id + ' '+ e.target.value );  
  switch (e.target.id) {
    case 'fullName':
      this.fullName = e.target.value;
      break;
    case 'nameGenerator':
      this.nameGenerator = e.target.value;
      break;
    default:
  }
}
generateNameHandler = () => {
  console.log('Full Name: ' + this.fullName + '\nGenerator: ' + this.nameGenerator);
  this.setState({
    fullName: this.fullName,
    nameGenerator: this.nameGenerator
  });
}
render() {
  let formProperties = {
    input: {
      label:'fullName',
      field:'What\'s your full name?'
    },
    select: {
      label:'nameGenerator',
      field:'What name generator would you like to use?'
    },
    button: {
      text: 'Generate!'
    }
  };
  return (
    <div className='App'>
      <div className='Form'>
        <Form properties={formProperties} submitHandler={this.generateNameHandler} onChange={this.changeHandler} />
      </div>
      <Result fullName={this.state.fullName} nameGenerator={this.state.nameGenerator} />
    </div>
  );
}
}

export default App;
