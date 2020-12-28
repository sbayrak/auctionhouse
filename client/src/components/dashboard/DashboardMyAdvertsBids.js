import React from 'react';
import { Fragment } from 'react';
import Moment from 'react-moment';

const DashboardMyAdvertsBids = ({ bid }) => {
  return (
    <Fragment>
      <span id='single-advert-bids-title'>Bids to this advert : </span>
      <button id='hide'>
        <i className='fas fa-arrow-circle-down'></i>
      </button>
      <div className='single-advert-bid'>
        <a
          href={`/companies/company/${bid.user}`}
          id='single-advert-bid-company'
        >
          {bid.company ? bid.company : '-'}
        </a>
        <span id='single-advert-bid-bid'>{bid.bid ? bid.bid : '-'}</span>
        <span id='single-advert-bid-date'>
          <Moment format='DD/MM/YYYY'>{bid.date}</Moment>{' '}
        </span>

        <button type='button' id='single-advert-bid-button'>
          Accept
        </button>
      </div>
    </Fragment>
  );
};

export default DashboardMyAdvertsBids;
