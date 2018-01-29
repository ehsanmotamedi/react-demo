import React from 'react';
import Data from '../../../Data/Data'

const isAlpha = (str) => {
  return /^[a-zA-Z()]$/.test(str);
}

const result = (props) => {
  // Split the full name into first / last
  let names = props.fullName.trim().split(' ');

  // Separate the first name's first letter
  let firstNameLetter = names[0][0] ? names[0][0].toLowerCase() : null;

  // Separate the last name's first letter
  let lastNameLetter = names[names.length-1][0] ? names[names.length-1][0].toLowerCase() : null;

  // Check validity of the first letters
  if (
    isAlpha(firstNameLetter) && 
    isAlpha(lastNameLetter) && 
    props.nameGenerator) {

    let generator;
    switch (props.nameGenerator) {
      case 'metal':
        generator = Data.metal;
        break;
      case 'elf':
        generator = Data.elf;
        break;
      default:
        generator = Data.rave;
    }

    return (
      <div className='Result'>
        <span id='GeneratedName'>
          {
            generator.firstName[firstNameLetter] + ' ' + generator.lastName[lastNameLetter]
          }
        </span>
      </div>
    );

  }else{
    return '';
  }
}

export default result;