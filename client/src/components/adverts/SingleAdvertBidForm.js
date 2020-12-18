import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placeBid } from '../../actions/advert';
import { Fragment } from 'react';
import { Modal } from 'react-bootstrap';

export const SingleAdvertBidForm = ({ advertId, placeBid }) => {
  const [bid, setBid] = useState('');
  const [smShow, setSmShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log(bid);

  const myModal = (
    <Modal
      size='sm'
      show={smShow}
      onHide={() => setSmShow(false)}
      aria-labelledby='example-modal-sizes-title-sm'
    >
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-sm'>Success!</Modal.Title>
      </Modal.Header>
      <Modal.Body>You have successfully placed your bid of {bid}. </Modal.Body>
    </Modal>
  );
  const submitBid = (e) => {
    e.preventDefault();
    if (typeof bid === 'string') {
      placeBid(advertId, { bid: bid });
      setBid('');
      // setTimeout(() => alert('Success!'), 2000);
      // setTimeout(() => myModal, 2000);
      setShowModal(true);
    } else {
      myModal('fail');
    }
  };
  return (
    <Fragment>
      {showModal && (
        <Fragment>
          <Modal
            size='sm'
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby='example-modal-sizes-title-sm'
          >
            <Modal.Header closeButton>
              <Modal.Title id='example-modal-sizes-title-sm'>
                Success!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You have successfully placed your bid of {bid}.{' '}
            </Modal.Body>
          </Modal>
        </Fragment>
      )}

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
};

export default connect(null, { placeBid })(SingleAdvertBidForm);
