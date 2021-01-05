import React, { Fragment } from 'react';
import notfound from '../../img/404.svg';
import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NotFound = ({ auth: { isAuthenticated } }) => {
  const [myRed, setMyRed] = useState(false);
  const styles = {
    width: 'calc(100% - 100px)',
    height: '600px',
    position: 'relative',
    top: '200px',
    marginBottom: '150px',
  };

  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated) {
        history.push('/adverts');
      } else if (!isAuthenticated) {
        history.push('/');
      }
    }, 3000);
  });

  return (
    <Fragment>
      <img
        src={notfound}
        style={styles}
        onMouseMove={() => setMyRed(true)}
      ></img>
    </Fragment>
  );
};

NotFound.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(NotFound);
