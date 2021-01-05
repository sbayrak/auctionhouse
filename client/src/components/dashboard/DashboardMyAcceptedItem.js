import React from 'react';
import Moment from 'react-moment';

const DashboardMyAcceptedItem = ({ advert }) => {
  return (
    <div className='divTableRow'>
      <div className='divTableCell'>
        <a href={`/companies/company/${advert.bidderId}`}>{advert.bidderId}</a>
      </div>
      <div className='divTableCell'>&nbsp;{advert.bidderCompany}</div>
      <div className='divTableCell'>
        &nbsp;&nbsp;<Moment format='DD/MM/YYYY'>{advert.date}</Moment>
      </div>
      <div className='divTableCell'>&nbsp;{advert.bid}</div>
    </div>
  );
};

export default DashboardMyAcceptedItem;
