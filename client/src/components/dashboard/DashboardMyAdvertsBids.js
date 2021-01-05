import React from 'react';
import { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { acceptBid } from '../../actions/advert';
import { setAlert } from '../../actions/alert';

const DashboardMyAdvertsBids = ({ bid, advert, acceptBid }) => {
  const submitBid = (e) => {
    e.preventDefault();

    acceptBid(advert._id, bid._id);
    setAlert('You have successfully accepted a bid!', 'success', 3000);
  };

  console.log(advert.accepted);
  return (
    <Fragment>
      <form onSubmit={(e) => submitBid(e)}>
        <div
          className={
            advert.status && advert.accepted.bid == bid.bid
              ? 'single-advert-bid accepted'
              : 'single-advert-bid'
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
            <Moment format='DD/MM/YYYY'>{bid.date}</Moment>
          </span>
          {/* buraya kdar hata vermedi */}

          {advert.status && advert.accepted.bid == bid.bid ? (
            <button
              disabled='false'
              style={{ cursor: 'not-allowed' }}
              type='submit'
              id='single-advert-bid-button'
            >
              Accepted
            </button>
          ) : (
            <Fragment>
              {advert.status ? (
                <button
                  type='submit'
                  id='single-advert-bid-button'
                  style={{ cursor: 'not-allowed' }}
                >
                  Accept
                </button>
              ) : (
                <button type='submit' id='single-advert-bid-button'>
                  Accept
                </button>
              )}
            </Fragment>
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
