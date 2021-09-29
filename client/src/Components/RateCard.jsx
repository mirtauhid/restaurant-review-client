import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router';
import { api } from '../Services/api';
import '../Styles/RateCard.css';

const RateCard = () => {
  const [review, setReview] = useState({
    rating: null,
    date: null,
    comment: '',
  });

  const { id } = useParams();
  let inputProps = {
    placeholder: '  Select visit date',
  };

  const ratingChanged = (newRating) => {
    setReview({ ...review, rating: newRating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review);
    axios.put(`${api}/restaurants/${id}`, review).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <form style={{ minWidth: '400px' }} id='feedback' onSubmit={handleSubmit}>
        <h2>Write your review</h2>
        <br />
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
            setReview({
              ...review,
              date: moment(event._d).format('YYYY-MM-DD'),
            })
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
                onBlur={(event) =>
                  setReview({ ...review, comment: event.target.value })
                }
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
