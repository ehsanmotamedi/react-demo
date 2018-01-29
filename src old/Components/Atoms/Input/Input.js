import React from 'react';

const input = (props) => {
  return (
    <label htmlFor={props.label ? props.label : 'inputElement'}>
      <span>{props.field}</span>
      <input id={props.name ? props.name : 'inputElement'} type={props.type ? props.type : 'text'} />
    </label>
  );
}
export default input;