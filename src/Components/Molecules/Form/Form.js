import React from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import Select from '../../Atoms/Select/Select';

const form = (props) => {
  return (
    <div>
      <Input label={props.properties.input.label} field={props.properties.input.field} onChange={props.onChange} />
      <Select label={props.properties.select.label} field={props.properties.select.field} onChange={props.onChange} />
      <Button text='Generate!' onClick={props.submitHandler} />
    </div>
  );
}

export default form;