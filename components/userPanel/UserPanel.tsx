import React from 'react';
import userPanelStyles from './userPanel.module.css';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { userDataState } from '../../recoil';
import { useRouter } from 'next/router';

const UserPanel = () => {
  const router = useRouter();

  const [userData, setUserData] = useRecoilState(userDataState);
  const logOut = async () => {
    try {
      await fetch(`http://localhost:5000/auth/logout`, {
        method: `POST`,
        mode: 'cors',
        credentials: 'include',
      });
      router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={`container ${userPanelStyles.container}`}>
        <h1>{userData.user.nickname}</h1>
        <Link href='/profile'>
          <a className={userPanelStyles.navigate}>Check the profile</a>
        </Link>
        <div className={userPanelStyles.border} />
        <Link href='/'>
          <a
            className={userPanelStyles.navigate}
            onClick={() => {
              logOut();
            }}
          >
            Log out
          </a>
        </Link>
      </div>
    </>
  );
};

export default UserPanel;
