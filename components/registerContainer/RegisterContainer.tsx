import React from 'react';
import LogInput from '../logInput/LogInput';
import registerContainerStyles from './registerContainer.module.css';

const RegisterContainer = () => {
  return (
    <form className={`container ${registerContainerStyles.container}`}>
      <h1 className={registerContainerStyles.title}>Register</h1>
      <LogInput label='Nickname' />
      <LogInput label='E-mail address' />
      <LogInput label='Password' />
      <LogInput label='Repeat password' />
      <button>Submit</button>
    </form>
  );
};

export default RegisterContainer;
