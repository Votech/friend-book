import React, { useState } from 'react';

import './sign-in-and-sign-up.styles.scss';

import friendbookLogo from '../../assets/svg/facebook-logo.svg';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSingUpPage = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
  };

  return (
    <div className='sign-in-and-sign-up-page'>
      <img
        className='friendbook-logo'
        src={friendbookLogo}
        alt='friendbook logo'
      />
      <SignIn className='sign-in' toggle={toggle} />
      {isOpened ? <SignUp toggle={toggle} /> : null}
    </div>
  );
};

export default SignInAndSingUpPage;
