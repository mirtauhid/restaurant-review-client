import React from 'react';
import '../Styles/RateCard.css';

const RateCard = () => {
  return (
    <div>
      <form id='feedback' action>
        <div className='pinfo'>Write your feedback.</div>
        <div className='form-group'>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'>
                <i className='fa fa-heart' />
              </span>
              <select className='form-control' id='rate'>
                <option value='1star'>1</option>
                <option value='2stars'>2</option>
                <option value='3stars'>3</option>
                <option value='4stars'>4</option>
                <option value='5stars'>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div className='col-md-4 inputGroupContainer'>
            <div className='input-group'>
              <span className='input-group-addon'>
                <i className='fa fa-envelope' />
              </span>
              <input
                name='email'
                type='email'
                className='form-control'
                placeholder='john.doe@yahoo.com'
              />
            </div>
          </div>
        </div>
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
