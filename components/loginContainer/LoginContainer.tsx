import Link from 'next/link';
import React, { useState } from 'react';
import LogInput from '../logInput/LogInput';
import loginContainerStyles from './loginContainer.module.css';

const LoginContainer = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [repPassword, setRepPassword] = useState(``);

  return (
    <>
      <div className={`container ${loginContainerStyles.container}`}>
        <form className={loginContainerStyles.block}>
          <h1 className={loginContainerStyles.title}>Log in</h1>
          <LogInput label='E-mail address' state={email} setState={setEmail} />
          <LogInput
            label='Password'
            state={password}
            setState={setPassword}
            type='password'
          />
          <LogInput
            label='Repeat password'
            state={repPassword}
            setState={setRepPassword}
            type='password'
          />
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
