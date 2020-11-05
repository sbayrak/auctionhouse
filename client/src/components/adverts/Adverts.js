import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAdverts } from '../../actions/advert';
import PropTypes from 'prop-types';

const Adverts = ({ getAdverts }) => {
  useEffect(() => {
    getAdverts();
  }, []);
  return <div></div>;
};

Adverts.propTypes = {
  getAdverts: PropTypes.func,
};

export default connect(null, { getAdverts })(Adverts);
