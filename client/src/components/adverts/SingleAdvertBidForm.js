import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placeBid } from '../../actions/advert';
import { Fragment } from 'react';
import { setAlert } from '../../actions/alert';

export const SingleAdvertBidForm = ({ advertId, placeBid, setAlert }) => {
  const [bid, setBid] = useState('');
  // console.log(bid);

  const submitBid = (e) => {
    e.preventDefault();
    let isnum = /^\d+$/.test(bid);
    if (isnum) {
      placeBid(advertId, { bid: bid });
      setAlert(`You have successfully placed your bid of ${bid}`, 'success');
      setBid('');
    } else if (!isnum) {
      setAlert('Please try again.', 'danger');
    }
  };
  return (
    <Fragment>
      <form onSubmit={(e) => submitBid(e)}>
        <div className='single-advert-bid'>
          <input
            type='text'
            name='bid'
            id='bid'
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            placeholder='Place your bid here...'
          />
          <button type='submit' id='bid-button'>
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

SingleAdvertBidForm.propTypes = {
  placeBid: PropTypes.func,
  setAlert: PropTypes.func,
};

export default connect(null, { placeBid, setAlert })(SingleAdvertBidForm);
