import React from 'react';
import Moment from 'react-moment';

const DashboardMyBidsItem = ({ advert }) => {
  return (
    <div className='divTableRow'>
      <div className='divTableCell'>
        <a href={`/adverts/advert/${advert.advertNo}`} target='_blank'>
          {advert.advertNo}
        </a>
      </div>
      {/* <div className='divTableCell'>
        &nbsp;Need construction trucks for new buildings
      </div> */}
      <div className='divTableCell'>
        &nbsp;<Moment format='DD/MM/YYYY'>{advert.date}</Moment>
      </div>
      <div className='divTableCell'>&nbsp;{advert.bid}</div>
    </div>
  );
};

export default DashboardMyBidsItem;
