import React from 'react';
import '../../css/index.css';
import securesvg from '../../img/secure.svg';
import calendarsvg from '../../img/calendar.svg';
import bidsvg from '../../img/bid.svg';
import securitysvg from '../../img/security.svg';
import conferencesvg from '../../img/conference.svg';

const Landing = () => {
  return (
    <div className='wrapper'>
      <div className='welcomer'>
        <span className='welcomer-title'>Welcome to AuctionHouse</span>
        <p className='welcomer-p'>
          Where you can find a customer-company for your large-scale
          advertisement
        </p>
        <div className='welcomer-register'>
          <span className='welcomer-register-title'>
            Don't have an account or already have one ?
          </span>
          <div className='welcomer-register-links'>
            <a href='register.html'>Sign Up</a>
            <a href='login.html'>Sign In</a>
          </div>
        </div>
      </div>

      <div className='mid'>
        <div className='mid-group1'>
          <img src={calendarsvg} alt='' style={{ width: '400px' }} />
          <div className='mid-group-text'>
            <span>Save Time</span>
            <p>
              We are aware how time is precious for us. <br />
              Therefore creating an advert, getting offers, accepting bids can
              be done in seconds.
            </p>
          </div>
        </div>
        <div className='mid-group2'>
          <div className='mid-group-text'>
            <span>Verified Companies</span>
            <p>
              To give an assurance, you may see the customer-company's tax
              number <br />
              so that to check on the website of
              <a href='https://ivd.gib.gov.tr/'>official tax office.</a>
            </p>
          </div>
          <img src={securesvg} alt='' style={{ width: '350px' }} />
        </div>

        <div className='mid-group1'>
          <img src={bidsvg} alt='' style={{ width: '400px' }} />
          <div className='mid-group-text'>
            <span>Bid to an Advert</span>
            <p>
              Giving bids to the tenders were never this easy. <br />
              The companies may offer bids to each other's adverts, view their
              offers, list accepted bids and more is on your profile.
            </p>
          </div>
        </div>

        <div className='mid-group2'>
          <div className='mid-group-text'>
            <span>Shout to Large Community</span>
            <p>
              In AuctionHouse, we are offering to reach huge group of companies
              in different fields in seconds To get your job requirements can be
              done in days now.
            </p>
          </div>
          <img src={conferencesvg} alt='' style={{ width: '550px' }} />
        </div>

        <div className='mid-group1'>
          <img src={securitysvg} alt='' style={{ width: '400px' }} />
          <div className='mid-group-text'>
            <span>Security Precautions</span>
            <p>
              As AuctionHouse, we care about end-users' security. <br />
              Therefore AuctionHouse uses SSL certificate for providing secure
              communication. Also we use strong hash algorithms to protect your
              data. <br />
              For further and technical details of precautions, visit our terms
              and conditions.
            </p>
          </div>
        </div>
      </div>

      <h1>How it works?</h1>
      <div className='bottom'>
        <div className='bottom-group'>
          <span className='number'>1</span>
          <p>Create advert</p>
          <span className='text'>
            Adding necessary fields, be able to get offers from others.
          </span>
        </div>
        <div className='bottom-group'>
          <span className='number'>2</span>
          <p>Get offers</p>
          <span className='text'>
            The customer-companies now can add a bid to your advert.
          </span>
        </div>
        <div className='bottom-group'>
          <span className='number'>3</span>
          <p>Discuss on comments</p>
          <span className='text'>
            Adverts have a comment section where the customer-companies may
            discuss details or highlight oneself.
          </span>
        </div>
        <div className='bottom-group'>
          <span className='number'>4</span>
          <p>accept an offer</p>
          <span className='text'>
            Now, the owner of the advert, may or may not accept an offer.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
