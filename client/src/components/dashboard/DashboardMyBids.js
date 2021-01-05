import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { myBids } from '../../actions/advert';
import DashboardMyBidsItem from './DashboardMyBidsItem';
import Spinner from '../layout/Spinner';

const DashboardMyBids = ({ advert: { loading, my_bids }, myBids }) => {
  useEffect(() => {
    myBids();
  }, []);

  return (
    <Fragment>
      {my_bids ? (
        my_bids.map((advert, index) => (
          <DashboardMyBidsItem
            advert={advert}
            key={index}
          ></DashboardMyBidsItem>
        ))
      ) : (
        <Spinner></Spinner>
      )}
    </Fragment>
  );
};

DashboardMyBids.propTypes = {
  advert: PropTypes.object,
  myBids: PropTypes.func,
};

const mapStateToProps = (state) => ({
  advert: state.advert,
});

export default connect(mapStateToProps, { myBids })(DashboardMyBids);
