import React, { useState } from 'react';

const UseStateBasics = () => {
  const [szoveg, helyettesitse] = useState('random');

  const Click = () => {
    if (szoveg === 'random') {
      helyettesitse('Hello');
    } else {
      helyettesitse('random');
    }
  };
  return(
    <React.Fragment>
      <h1>{szoveg}</h1>
      <button className='btn' onClick={Click}>
        changeTitle
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
