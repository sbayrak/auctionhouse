import React from 'react';
import PropTypes from 'prop-types';
import '../../css/adverts2.css';

const AdvertItem = ({ advert }) => {
  return (
    <div className='single-advert'>
      <div className='single-advert-top'>
        <ul className='single-advert-top-ul'>
          <li>
            <a id='advert-no'>{advert._id}</a>
          </li>
          <li>
            <span id='advert-title'>{advert.title}</span>
          </li>
          <li>
            <a href={`/company/${advert.user}`} id='advert-company'>
              {advert.company}
            </a>
          </li>
        </ul>
      </div>
      <div className='single-advert-mid'>
        <textarea name='text' id='text' cols='30' rows='10' disabled>
          {advert.text}
        </textarea>
      </div>
      <div className='single-advert-bottom'>
        <button type='button' id='single-advert-bottom-button'>
          <a href={`/adverts/advert/${advert._id}`} id='advert-link'>
            Go to Advert
          </a>
        </button>
      </div>
    </div>
  );
};

AdvertItem.propTypes = {
  advert: PropTypes.object,
};

export default AdvertItem;
