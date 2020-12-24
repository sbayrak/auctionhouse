import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ProfileAdvert = ({ advert }) => {
  return (
    <Fragment>
      <div className='single-advert'>
        <div className='single-advert-top'>
          <ul className='single-advert-top-ul'>
            <li>
              <Link to={`/adverts/advert/${advert._id}`} id='advert-no'>
                {advert._id}
              </Link>
            </li>
            <li>
              <span id='advert-title'>{advert.title}</span>
            </li>
            <li>
              <Link
                to={`/companies/company/${advert.user}`}
                id='advert-company'
              >
                {advert.company}
              </Link>
            </li>
          </ul>
        </div>
        <div className='single-advert-mid'>
          <textarea
            name='text'
            id='text'
            cols='30'
            rows='10'
            disabled
            value={advert.text}
          ></textarea>
        </div>
        <div className='single-advert-bottom'>
          <button type='button' id='single-advert-bottom-button'>
            <Link to={`/adverts/advert/${advert._id}`} id='advert-link'>
              Go to Advert
            </Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileAdvert;
