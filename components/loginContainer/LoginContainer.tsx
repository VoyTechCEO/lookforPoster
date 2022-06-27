import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LogInput from '../logInput/LogInput';
import loginContainerStyles from './loginContainer.module.css';

const LoginContainer = () => {
  const router = useRouter();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const logged = {
      email,
      password,
    };

    try {
      await fetch(`http://localhost:5000/auth/login`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(logged),
      });
      router.push(`/`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={`container ${loginContainerStyles.container}`}>
        <form className={loginContainerStyles.block} onSubmit={onSubmit}>
          <h1 className={loginContainerStyles.title}>Log in</h1>
          <LogInput label='E-mail address' state={email} setState={setEmail} />
          <LogInput
            label='Password'
            state={password}
            setState={setPassword}
            type='password'
          />

          <button type='submit'>Submit</button>
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
