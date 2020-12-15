import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../css/singleadvert.css';
import { connect } from 'react-redux';
import { getAdvertById } from '../../actions/advert';

const SingleAdvert = ({
  match,
  advert: { advert, loading, comments },
  getAdvertById,
}) => {
  useEffect(() => {
    getAdvertById(match.params.advertId);
  }, [getAdvertById, match.params.advertId]);

  return <h1> hi</h1>;
};

SingleAdvert.propTypes = {
  advert: PropTypes.object,
  getAdvertById: PropTypes.func,
};

const mapStateToProps = (state) => ({
  advert: state.advert.advert,
});

export default connect(mapStateToProps, { getAdvertById })(SingleAdvert);
