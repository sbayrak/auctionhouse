import React, { Fragment } from 'react';

const ProfileAdvert = ({ advert }) => {
  return (
    <Fragment>
      <div className='single-advert'>
        <div className='single-advert-top'>
          <ul className='single-advert-top-ul'>
            <li>
              <a href={`/adverts/advert/${advert._id}`} id='advert-no'>
                {advert._id}
              </a>
            </li>
            <li>
              <span id='advert-title'>{advert.title}</span>
            </li>
            <li>
              <a href={`/companies/company/${advert.user}`} id='advert-company'>
                {advert.company}
              </a>
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
            <a href={`/adverts/advert/${advert._id}`} id='advert-link'>
              Go to Advert
            </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileAdvert;
