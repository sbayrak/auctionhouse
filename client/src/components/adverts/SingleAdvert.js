import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../css/singleadvert.css';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { getAdvertById } from '../../actions/advert';
import SingleAdvertComment from './SingleAdvertComment';
import SingleAdvertBidForm from './SingleAdvertBidForm';
import SingleAdvertCommentForm from './SingleAdvertCommentForm';

const SingleAdvert = ({
  match,
  advert: { advert, loading, comments },
  auth,
  getAdvertById,
}) => {
  useEffect(() => {
    getAdvertById(match.params.advertId);
  }, [getAdvertById, match.params.advertId]);

  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          {!auth.user ? (
            <Spinner></Spinner>
          ) : (
            <Fragment>
              {!advert ? (
                <Spinner></Spinner>
              ) : (
                <div className='wrapper6'>
                  <div className='single-advert'>
                    <div className='single-advert-title'>
                      <div className='single-advert-title-left'>
                        <img src={auth.user.avatar} alt='' />
                        <span id='single-advert-title-left-company'>
                          <a href='#!'>{auth.user.company}</a>
                        </span>
                      </div>
                      <div className='single-advert-title-right'>
                        <textarea
                          name='text'
                          id='text'
                          cols='30'
                          rows='5'
                          disabled
                          value={advert.text}
                        ></textarea>
                        <span id='single-advert-title-right-date'>
                          Posted on{' '}
                          <Moment format='DD/MM/YYYY'>{advert.date}</Moment>
                        </span>
                      </div>
                    </div>

                    <SingleAdvertBidForm
                      advertId={advert._id}
                    ></SingleAdvertBidForm>

                    <div className='single-advert-comment'>
                      <SingleAdvertCommentForm
                        advertId={advert._id}
                      ></SingleAdvertCommentForm>
                    </div>

                    <div className='single-advert-comments'>
                      <Fragment>
                        {advert.comments.map((comment, key) => (
                          <SingleAdvertComment
                            comment={comment}
                            key={comment._id}
                            advertId={advert._id}
                          ></SingleAdvertComment>
                        ))}
                      </Fragment>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

SingleAdvert.propTypes = {
  advert: PropTypes.object,
  getAdvertById: PropTypes.func,
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  advert: state.advert,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAdvertById })(SingleAdvert);
