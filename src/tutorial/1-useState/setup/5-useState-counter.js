import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const ResetValue = () => {
    setValue(0);
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular counter</h2>

        <h1>{value}</h1>

        <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>

        <button className='btn' onClick={ResetValue}>Reset</button>

        <button className='btn' onClick={() => setValue(value + 1)}>increase</button>

      </section>
    </>
  )
};

export default UseStateCounter;
