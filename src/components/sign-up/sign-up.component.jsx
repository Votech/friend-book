import React from 'react';

import './sign-up.styles.scss';

import CloseIcon from '@material-ui/icons/Close';

import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

const SignUp = ({ toggle }) => {
  return (
    <div className='sign-up'>
      <div className='sign-up__container'>
        <div className='sign-up-header'>
          <h1>Sign Up</h1>
          <p>It's quick and easy.</p>
          <button className='sign-up-header-button' onClick={() => toggle()}>
            <CloseIcon />
          </button>
        </div>
        <form className='sign-up-form'>
          <div className='sign-up-form-top'>
            <input
              className='sign-up-input-top'
              placeholder='Frist name'
              required
            />
            <div style={{ width: '16px' }} />
            <input
              className='sign-up-input-top'
              placeholder='Surname'
              required
            />
          </div>
          <input
            className='sign-up-input-top'
            placeholder='Email address'
            required
          />
          <input
            className='sign-up-input-top'
            placeholder='New password'
            required
          />
          <div className='sign-up-input-bottom'>
            <label style={{ fontSize: '12px', marginBottom: '4px' }}>
              Date of birth
            </label>
            <input className='sign-up-input__date' type='date' required />
          </div>
          <div className='sign-up-input-bottom'>
            <label style={{ fontSize: '12px', marginBottom: '4px' }}>
              Gender
            </label>
            <div className='sign-up_form__radio-options'>
              <div className='sign-up-form__radio-option'>
                <label htmlFor='male'>Male</label>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  required
                />
              </div>
              <div className='sign-up-form__radio-option'>
                <label htmlFor='female'>Female</label>
                <input type='radio' id='female' name='gender' value='female' />
              </div>
              <div className='sign-up-form__radio-option'>
                <label htmlFor='other'>Other</label>
                <input type='radio' id='other' name='gender' value='other' />
              </div>
            </div>
          </div>
          <p className='sign-up__bottom-info'>
            By clicking Sign Up, you agree to our Terms. Learn how we collect,
            use and share your data in our Data Policy and how we use cookies
            and similar technology in our Cookie Policy. You may receive SMS
            notifications from us and can opt out at any time.
          </p>
          <CustomButton secondary>Sign Up</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
