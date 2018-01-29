import React from 'react';

const select = (props) => {
  let elementID = props.label ? props.label : 'selectElement';
  return (
    <label htmlFor={elementID}>
      <span>{props.field}</span>
      <select id={elementID} name={props.name} onChange={props.onChange}>
        <option value=''></option>
        <option value='metal'>Heavy Metal Band Name</option>
        <option value='elf'>Drunken Elf Name</option>
        <option value='rave'>Rave Name Generator</option>
      </select>
    </label>
  );
}
export default select;