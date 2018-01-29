import React from 'react';

const select = (props) => {
  return (
    <label htmlFor={props.label ? props.label : 'inputElement'}>
      <span>{props.field}</span>
      <select name={props.name}>
        <option value=''></option>
        <option value='metal'>Heavy Metal Band Name</option>
        <option value='elf'>Drunken Elf Name</option>
        <option value='rave'>Rave Name Generator</option>
      </select>
    </label>
  );
}
export default select;