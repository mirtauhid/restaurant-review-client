import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Assets/avatar.png';
import '../Styles/RestCard.css';

const RestCard = () => {
  return (
    <div className='doctor-card'>
      <div className='info'>
        <div className='avatar'>
          <img src={avatar} alt='doc name' />
        </div>
        <div className='details'>
          <div className='name'>Restaurant Name</div>
          <div className='meta-info'>
            <span className='sp'>Owner Name</span>
            <span className='prac-area'> Restaurant Address</span>
          </div>
        </div>
      </div>
      <div className='actions'>
        <div className='ratings'>
          <span className='rating-control'>
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star-half-o' />
            <i className='fa fa-star-o' />
            <i className='fa fa-star-o' />
          </span>
          <span className='rating-count'>Average Rating</span>
        </div>
        <div className='comments'>
          <span className='comment-count'>
            <strong>340</strong> Reviews
          </span>
        </div>
        <div className='consultation'>
          <span className='fee'>
            <strong>34K</strong>Comments
          </span>
        </div>
        <div className='appo'>
          <Link to='/restaurant/1' className='btn'>
            Review Now
          </Link>
        </div>
      </div>
      <div className='locations'></div>
    </div>
  );
};

export default RestCard;
