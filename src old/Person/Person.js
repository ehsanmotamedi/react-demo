import React from 'react';

const person = (props) => {
  return (<p>{props.name ? props.name : "No one"} is cool.</p>);
}

export default person;