import moment from 'moment';
import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import ReactStars from 'react-rating-stars-component';
import '../Styles/RateCard.css';

const RateCard = () => {
  let inputProps = {
    placeholder: '  Select visit date',
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <form style={{ minWidth: '400px' }} id='feedback' action>
        <div className='pinfo'>Write your review.</div>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor='#ffd700'
        />
        <br />
        <Datetime
          inputProps={inputProps}
          onChange={(event) =>
            console.log(moment(event._d).format('YYYY-MM-DD'))
          }
          timeFormat={false}
        />
        <br />
        <div className='pinfo'></div>
        <div className='form-group'>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'>
                <i className='fa fa-pencil' />
              </span>
              <textarea
                className='form-control'
                id='review'
                rows={13}
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RateCard;
