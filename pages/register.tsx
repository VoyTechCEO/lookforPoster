import React from 'react';
import HeadSetter from '../components/headSetter/HeadSetter';
import Overlay from '../components/overlay/Overlay';
import RegisterContainer from '../components/registerContainer/RegisterContainer';

const register = () => {
  return (
    <main className='main'>
      <HeadSetter title='Register' />
      <Overlay />
      <RegisterContainer />
    </main>
  );
};

export default register;
