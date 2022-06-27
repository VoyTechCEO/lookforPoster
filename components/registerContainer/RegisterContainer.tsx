import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LogInput from '../logInput/LogInput';
import registerContainerStyles from './registerContainer.module.css';

interface Registered {
  nickname: string;
  email: string;
  password: string;
}

const RegisterContainer = () => {
  const router = useRouter();

  const [nickname, setNickname] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [repPassword, setRepPassword] = useState(``);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === repPassword) {
      const registered = {
        nickname,
        email,
        password,
      };

      try {
        await fetch(`http://localhost:5000/users/register`, {
          method: `POST`,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registered),
        });
        router.push(`/login`);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(`Repeat password correctly`);
    }
  };

  return (
    <form
      className={`container ${registerContainerStyles.container}`}
      onSubmit={onSubmit}
    >
      <h1 className={registerContainerStyles.title}>Register</h1>
      <LogInput label='Nickname' state={nickname} setState={setNickname} />
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
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegisterContainer;
