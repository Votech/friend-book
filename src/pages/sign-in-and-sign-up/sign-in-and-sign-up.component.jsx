import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import friendbookLogo from '../../assets/svg/facebook-logo.svg';

const SignInAndSingUpPage = () => {
  return (
    <div className='sign-in-and-sign-up-page'>
      <img
        className='friendbook-logo'
        src={friendbookLogo}
        alt='friendbook logo'
      />
      <SignIn className='sign-in' />
    </div>
  );
};

export default SignInAndSingUpPage;
