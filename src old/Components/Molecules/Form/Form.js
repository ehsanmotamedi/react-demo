import React from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import Select from '../../Atoms/Select/Select';

const form = (props) => {
  return (
    <div>
      <Input label={props.properties.label} field={props.properties.input.field} />
      <Select label='newNameType' field='What name generator would you like?' />
      <Button text='Generate!' />
    </div>
  );
}

export default form;