import React from 'react';

const ErrorExample = () => {

  var title = 'random title';
  //ez a funkcio lesz meghivva lentebb a klikkesemenyre
  const handleClick = () => {
    //sajnos igy nem tudom megvaltoztatni a valtozot mert funkcion kivul van
    //erre van a useState
      title = 'hjk';
    
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};
export default ErrorExample;
