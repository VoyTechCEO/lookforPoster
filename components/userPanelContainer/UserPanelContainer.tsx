import React from 'react';
import userPanelStyles from './userPanelContainer.module.css';
import UserPanel from '../userPanel/UserPanel';
import { useRecoilState } from 'recoil';
import { userImageState } from '../../recoil';

const UserPanelContainer = () => {
  const [userImage, setUserImage] = useRecoilState(userImageState);

  return (
    <>
      <div className={`container ${userPanelStyles.container}`}>
        <button className={userPanelStyles.picture}>
          <img src={userImage} alt='Profile picture' />
        </button>
        <UserPanel />
      </div>
    </>
  );
};

export default UserPanelContainer;
