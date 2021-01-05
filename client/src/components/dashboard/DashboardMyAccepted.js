import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardMyAcceptedItem from './DashboardMyAcceptedItem';
import Spinner from '../layout/Spinner';
import { myAcceptedAdverts } from '../../actions/advert';

const DashboardMyAccepted = ({
  advert: { loading, accepted_adverts },
  myAcceptedAdverts,
}) => {
  useEffect(() => {
    myAcceptedAdverts();
  }, []);

  return (
    <Fragment>
      {accepted_adverts ? (
        accepted_adverts.map((advert, index) => (
          <DashboardMyAcceptedItem
            advert={advert}
            key={index}
          ></DashboardMyAcceptedItem>
        ))
      ) : (
        <Spinner></Spinner>
      )}
    </Fragment>
  );
};

DashboardMyAccepted.propTypes = {
  advert: PropTypes.object,
  myAcceptedAdverts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  advert: state.advert,
});

export default connect(mapStateToProps, { myAcceptedAdverts })(
  DashboardMyAccepted
);
