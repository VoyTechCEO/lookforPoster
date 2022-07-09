import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isRegisterSuccessState } from '../../recoil';
import LogInput from '../logInput/LogInput';
import registerContainerStyles from './registerContainer.module.css';

interface Registered {
  nickname: string;
  email: string;
  password: string;
}

const RegisterContainer = () => {
  const router = useRouter();

  const [isRegisterSuccess, setIsRegisterSuccess] = useRecoilState(
    isRegisterSuccessState
  );

  const [isCorrect, setIsCorrect] = useState(true);

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
        const res = await fetch(`http://localhost:5000/users/register`, {
          method: `POST`,
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify(registered),
        });
        const data = await res.json();
        console.log(data);
        if (data.registered) {
          setIsRegisterSuccess(true);
          router.push(`/`);
        } else {
          setIsCorrect(false);
        }
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
      <div className={registerContainerStyles.info}>
        <h1 className={registerContainerStyles.title}>Register</h1>
        {!isCorrect && (
          <p className={registerContainerStyles.error}>
            Sorry, the nickname or email is already taken.
          </p>
        )}
      </div>
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
