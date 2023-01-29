import React, { useState, useEffect } from 'react';

// cleanup function
// second argument
//ertekvaltozas vminek az ertekvaltozasa vagy egy szam
//eltavolitom az addeventlistenert mert a meretezes kozben többször is meghivja es sok memoriat foglal el igy akadozhat

const UseEffectCleanup = () => {
  const [ertek, ertekvaltozas] = useState(window.innerWidth);

  const CheckSize = () => {
    ertekvaltozas(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', CheckSize);

    return () =>{
      window.removeEventListener('resize',CheckSize);
    }
  }, []);

  return (
    <>
      <h2>Window size</h2>
      <h4>{ertek} px</h4>
    </>
  )
};

export default UseEffectCleanup;
