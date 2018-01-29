import React from 'react';

const button = (props) => <button onClick={props.onClick}>{props.text ? props.text : 'Button'}</button>;

export default button;