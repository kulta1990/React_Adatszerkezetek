import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
//const [kezdeti ertek, kezdö ertek valtoztatasa] = useState(kezdöertek)
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call UseEffect');
    document.title = `New messages(${value})`;
  });

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>CLICK</button>
    </>
  )
};
export default UseEffectBasics;
