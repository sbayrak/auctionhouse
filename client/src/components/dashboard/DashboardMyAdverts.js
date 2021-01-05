import React, { Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import DashboardMyAdvertsBids from './DashboardMyAdvertsBids';
import { setAlert } from '../../actions/alert';
import { deleteAdvert } from '../../actions/advert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DashboardMyAdverts = ({ advert, key, setAlert, deleteAdvert }) => {
  const deleteThis = (e) => {
    setAlert('Advert successfully removed', 'success', 5000);
    deleteAdvert(advert._id);
  };
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
              <Fragment>
                <span id='single-advert-bids-title'>
                  Bids to this advert :{' '}
                </span>
                <button id='hide'>
                  <i className='fas fa-arrow-circle-down'></i>
                </button>
                {/* {advert.bids &&
                  advert.bids.map((bid) => (
                    <DashboardMyAdvertsBids
                      key={bid._id}
                      bid={bid}
                      advert={advert}
                    ></DashboardMyAdvertsBids>
                  ))} */}
                {advert.bids &&
                  advert.bids.map((bid, index) => (
                    <DashboardMyAdvertsBids
                      key={index}
                      bid={bid}
                      advert={advert}
                    ></DashboardMyAdvertsBids>
                  ))}
              </Fragment>
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
                onClick={(e) => deleteThis(e)}
              >
                Delete Advert
              </button>
            </div>
          </div>

          <div id='setup'></div>
        </Fragment>
      )}
    </Fragment>
  );
};

DashboardMyAdverts.propTypes = {
  setAlert: PropTypes.func,
  deleteAdvert: PropTypes.func,
};

export default connect(null, { setAlert, deleteAdvert })(DashboardMyAdverts);
