import React, { useEffect, useRef } from 'react';
import registerSuccessPopoutStyles from './registerSuccessPopout.module.css';
import Link from 'next/link';
import { useOutsideDetector } from '../../hooks/useOutsideDetector';
import { useRecoilState } from 'recoil';
import { isRegisterSuccessState } from '../../recoil';
import { useRouter } from 'next/router';

const RegisterSuccessPopout = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useRecoilState(
    isRegisterSuccessState
  );
  const popoutRef = useRef(null);
  useOutsideDetector(popoutRef, () => {
    setIsRegisterSuccess(false);
  });

  return (
    <>
      <div
        className={`container ${registerSuccessPopoutStyles.container}`}
        ref={popoutRef}
      >
        <h1>Successfully registered.</h1>
        <h1>
          <Link href='/login'>
            <a onClick={() => setIsRegisterSuccess(false)}>Log in</a>
          </Link>{' '}
          to gain access to posting.
        </h1>
      </div>
    </>
  );
};

export default RegisterSuccessPopout;
