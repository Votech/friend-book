import React from 'react';

import './sign-up.styles.scss';

import CloseIcon from '@material-ui/icons/Close';

import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      dateOfBirth: '',
      gender: '',
      profilePhotoUrl: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      email,
      password,
      name,
      surname,
      dateOfBirth,
      gender,
      profilePhotoUrl,
    } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        name,
        surname,
        dateOfBirth,
        gender,
        profilePhotoUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { toggle, name, surname, email, password, dateOfBirth } = this.props;

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
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <div className='sign-up-form-top'>
              <input
                className='sign-up-input-top'
                placeholder='Frist name'
                name='name'
                value={name}
                autoComplete='name'
                onChange={this.handleChange}
                required
              />
              <div style={{ width: '16px' }} />
              <input
                className='sign-up-input-top'
                placeholder='Surname'
                name='surname'
                value={surname}
                autoComplete='family-name'
                onChange={this.handleChange}
                required
              />
            </div>
            <input
              className='sign-up-input-top'
              placeholder='Email address'
              type='email'
              name='email'
              value={email}
              autoComplete='email'
              onChange={this.handleChange}
              required
            />
            <input
              className='sign-up-input-top'
              placeholder='New password'
              type='password'
              name='password'
              value={password}
              autoComplete='new-password'
              onChange={this.handleChange}
              required
            />
            <div className='sign-up-input-bottom'>
              <label style={{ fontSize: '12px', marginBottom: '4px' }}>
                Date of birth
              </label>
              <input
                className='sign-up-input__date'
                type='date'
                name='dateOfBirth'
                value={dateOfBirth}
                autoComplete='bday'
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='sign-up-input-bottom'>
              <label style={{ fontSize: '12px', marginBottom: '4px' }}>
                Gender
              </label>
              <div className='sign-up_form__radio-options'>
                <div
                  className='sign-up-form__radio-option'
                  onChange={this.handleChange}
                  required
                >
                  <label htmlFor='male'>Male</label>
                  <input type='radio' id='male' name='gender' value='male' />
                </div>
                <div className='sign-up-form__radio-option'>
                  <label htmlFor='female'>Female</label>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='female'
                  />
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
            <CustomButton type='submit' secondary>
              Sign Up
            </CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
