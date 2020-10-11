import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      currentUser: null,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert(error.message)
      } else if (error.code === 'auth/wrong-password') {
      alert('You have entered an invalid username or password');
      } else {
        console.log(error)
      }

    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete='username'
            placeholder='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password'
            autoComplete='current-password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Log In</CustomButton>
            <div className='gray-line' />
          </div>
        </form>
        <div className='sign-in__bottom'>
          <div>
            <CustomButton onClick={() => this.props.toggle()} secondary>
              Create New Account
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
