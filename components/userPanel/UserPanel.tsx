import React from 'react';
import userPanelStyles from './userPanel.module.css';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { userDataState } from '../../recoil';

const UserPanel = () => {
  const [userData, setUserData] = useRecoilState(userDataState);

  return (
    <>
      <div className={`container ${userPanelStyles.container}`}>
        <h1>{userData.user.nickname}</h1>
        <Link href='/profile'>
          <a className={userPanelStyles.navigate}>Check the profile</a>
        </Link>
        <div className={userPanelStyles.border} />
        <Link href='/'>
          <a className={userPanelStyles.navigate}>Log out</a>
        </Link>
      </div>
    </>
  );
};

export default UserPanel;
