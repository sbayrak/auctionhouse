import React from 'react';
import '../../css/footer.css';
import gravelWhite from '../../img/gravel-white.png';

const Footer = () => {
  return (
    <footer>
      <div class='left'>
        <span class='left-span'>
          <img src={gravelWhite} alt='' />
          AuctionHouse
        </span>
        <div class='social'>
          <a href='https://www.github.com/sbayrak'>
            <i class='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.github.com/sbayrak'>
            <i class='fab fa-twitter'></i>
          </a>
          <a href='https://www.github.com/sbayrak'>
            <i class='fab fa-youtube'></i>
          </a>
          <a href='https://www.github.com/sbayrak'>
            <i class='fab fa-instagram'></i>
          </a>
        </div>
        <div class='copy'>
          &copy; github.com/sbayrak | Developed by Suat Bayrak <br />
          All Rights Reserved.
        </div>
      </div>
      <div class='mid'>
        <span class='mid-title'> About Us </span>
        <p>
          AuctionHouse is a advert based tender foundation, where you can find a
          customer-company for your large-scale advertisement.
        </p>
      </div>
      <div class='right'>
        <span class='right-title'>Contact Us</span>
        <p>
          For further requests and questions please contact via e-mail below
        </p>
        <h5>suat.bayrak@bilgiedu.net</h5>
      </div>
    </footer>
  );
};

export default Footer;
