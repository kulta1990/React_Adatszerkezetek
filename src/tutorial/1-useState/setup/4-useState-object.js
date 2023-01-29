import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'message'
  });
  const changeMessage = () => {
    setPerson({ ...person, message: 'szovegvaltozas' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>GOMB</button>
    </>
  )
};

export default UseStateObject;
/*a change message funkciot reactban zarojel nelkul hivom meg: onClick={changeMessage}
ha {changeMessage()} irok az csak sima JS-ben mukodik itt NEM!
a {...person, message: 'xyz'}  ebben az esetben masolja az objetum ertekeit
es az utolso a message erteket felülirom 'xyz'-re. */