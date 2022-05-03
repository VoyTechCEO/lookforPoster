import type { NextPage } from 'next';
import React from 'react';
import HeadSetter from '../components/headSetter/HeadSetter';
import LoginContainer from '../components/loginContainer/LoginContainer';
import Overlay from '../components/overlay/Overlay';

const login: NextPage = () => {
  return (
    <main className='main'>
      <HeadSetter title='Log in' />
      <Overlay />
      <LoginContainer />
    </main>
  );
};

export default login;
