import React from 'react';
import '../../css/loading.css';
import gravelWhite from '../../img/gravel-white.png';

const Spinner = () => {
  return (
    <div className='wrapperLoading'>
      <div className='ring'>
        <img src={gravelWhite} alt='' />
        <span className='loadingSpan'></span>
      </div>
    </div>
  );
};

export default Spinner;
