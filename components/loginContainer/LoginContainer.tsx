import Link from 'next/link';
import React from 'react';
import LogInput from '../logInput/LogInput';
import loginContainerStyles from './loginContainer.module.css';

const LoginContainer = () => {
  return (
    <>
      <div className={`container ${loginContainerStyles.container}`}>
        <form className={loginContainerStyles.block}>
          <h1 className={loginContainerStyles.title}>Log in</h1>
          <LogInput label='E-mail address' />
          <LogInput label='Password' />
          <LogInput label='Repeat password' />
          <button>Submit</button>
        </form>
        <div className={loginContainerStyles.divider}>
          <div className={loginContainerStyles.line} />
          <span className={loginContainerStyles.text}>OR</span>
          <div className={loginContainerStyles.line} />
        </div>
        <div className={loginContainerStyles.block}>
          <Link href='/register'>Register now for free</Link>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
