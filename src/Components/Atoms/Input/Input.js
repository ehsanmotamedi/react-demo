import React from 'react';

const input = (props) => {
  let elementID = props.label ? props.label : 'inputElement';
  return (
    <label htmlFor={elementID}>
      <span>{props.field}</span>
      <input id={elementID} type={props.type ? props.type : 'text'} onChange={props.onChange} />
    </label>
  );
}
export default input;