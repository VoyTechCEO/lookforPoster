import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userDataState } from '../../recoil';
import navStyles from './nav.module.css';
import UserPanelContainer from '../userPanelContainer/UserPanelContainer';

const Nav = () => {
  const [userData, setUserData] = useRecoilState(userDataState);

  return (
    <>
      <nav className={`container ${navStyles.container}`}>
        <div className={navStyles.part}></div>
        <div className={navStyles.part}>
          <Link href='/'>
            <a className={navStyles.navigate}>lookforPoster</a>
          </Link>
        </div>
        <div className={navStyles.part}>
          {!userData.loggedIn ? (
            <Link href='/login'>
              <a className={navStyles.navigate}>Log in</a>
            </Link>
          ) : (
            <UserPanelContainer />
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
