import React, { Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const DashboardMyAdverts = ({ advert, key }) => {
  return (
    <Fragment>
      {!advert ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          <div className='single-advert'>
            <div className='single-advert-top'>
              <ul className='single-advert-top-ul'>
                <li>
                  <Link
                    to={`/adverts/advert/${advert._id}`}
                    target='_blank'
                    id='advert-no'
                  >
                    {advert._id}
                  </Link>
                </li>
                <li>
                  <span id='advert-title'>{advert.title}</span>
                </li>
                <li>
                  <Link
                    to={`/companies/company/${advert.user}`}
                    target='_blank'
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
            <div className='single-advert-bids'>
              <span id='single-advert-bids-title'>Bids to this advert : </span>
              <button id='hide'>
                <i className='fas fa-arrow-circle-down'></i>
              </button>
              <div className='single-advert-bid'>
                <a href='#!' id='single-advert-bid-company'>
                  Bayrak Company
                </a>
                <span id='single-advert-bid-bid'>50000</span>
                <span id='single-advert-bid-date'>09/10/2020</span>

                <button type='button' id='single-advert-bid-button'>
                  Accept
                </button>
              </div>
            </div>
            <div className='single-advert-bottom'>
              <button type='button' id='single-advert-bottom-button'>
                <a href={`/adverts/advert/${advert._id}`} id='advert-link'>
                  Go to Advert
                </a>
              </button>
              <button
                type='button'
                className='advert-delete-button'
                id='single-advert-bottom-button'
              >
                <a href='#!' id='advert-delete-link'>
                  Delete Advert
                </a>
              </button>
            </div>
          </div>

          <div id='setup'></div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default DashboardMyAdverts;
