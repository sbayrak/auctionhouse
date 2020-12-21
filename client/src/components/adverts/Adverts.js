import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAdverts } from '../../actions/advert';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/adverts2.css';
import Spinner from '../layout/Spinner';
import AdvertItem from './AdvertItem';

const Adverts = ({ getAdverts, advert: { adverts, loading } }) => {
  useEffect(() => {
    getAdverts();
  }, []);

  return (
    <Fragment>
      {loading && adverts !== null ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          <div className='wrapper5'>
            <span id='title'>List of all adverts</span>
            <div className='create-advert'>
              <button id='create-advert-btn'>
                <Link to='/create-advert'>Create Advert</Link>
              </button>
            </div>
            <div className='all-adverts'>
              {adverts !== null ? (
                adverts.map((advert) => (
                  <AdvertItem key={advert._id} advert={advert}></AdvertItem>
                ))
              ) : (
                // Spinner component
                <Spinner></Spinner>
              )}

              <div id='setup'></div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Adverts.propTypes = {
  getAdverts: PropTypes.func,
  advert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  advert: state.advert,
});

export default connect(mapStateToProps, { getAdverts })(Adverts);
