import React from 'react';
import { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { acceptBid } from '../../actions/advert';
import { setAlert } from '../../actions/alert';

const DashboardMyAdvertsBids = ({ bid, advert, acceptBid }) => {
  console.log(bid._id);
  console.log(advert.status);

  const submitBid = (e) => {
    e.preventDefault();

    acceptBid(advert._id, bid._id);
    setAlert('You have successfully accepted a bid!', 'success', 3000);
  };

  return (
    <Fragment>
      <form onSubmit={(e) => submitBid(e)}>
        <button id='hide'>
          <i className='fas fa-arrow-circle-down'></i>
        </button>
        <div
          className={
            advert.status ? 'single-advert-bid accepted' : 'single-advert-bid'
          }
        >
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

          {advert.status && advert.accepted.bid == bid.bid ? (
            <button disabled type='submit' id='single-advert-bid-button'>
              Accepted
            </button>
          ) : (
            <button type='submit' id='single-advert-bid-button'>
              Accept
            </button>
          )}
        </div>
      </form>
    </Fragment>
  );
};

DashboardMyAdvertsBids.propTypes = {
  acceptBid: PropTypes.func,
  setAlert: PropTypes.func,
};

export default connect(null, { acceptBid, setAlert })(DashboardMyAdvertsBids);
