import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userDataState } from '../../recoil';
import navStyles from './nav.module.css';

const Nav = () => {
  const [userData, setUserData] = useRecoilState(userDataState);

  return (
    <>
      <nav className={`container ${navStyles.container}`}>
        <div className={navStyles.part}></div>
        <div className={navStyles.part}>
          <Link href='/'>lookforPoster</Link>
        </div>
        <div className={navStyles.part}>
          {!userData.loggedIn ? (
            <Link href='/login'>Log in</Link>
          ) : (
            <Link href='/login'>{userData.user.nickname}</Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
