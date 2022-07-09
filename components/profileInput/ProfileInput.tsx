import React from 'react';
import { useRecoilState } from 'recoil';
import { currentProfileUserState, userDataState } from '../../recoil';
import profileInputStyles from './profileInput.module.css';

interface Props {
  name: string;
  content: string;
}

const ProfileInput = ({ name, content }: Props) => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [currentProfileUser, setCurrentProfileUser] = useRecoilState(
    currentProfileUserState
  );

  return (
    <>
      <div className={`container ${profileInputStyles.container}`}>
        <h2>{name}</h2>
        <p>{content}</p>
        {(userData.user === currentProfileUser ||
          name !== `E-mail address`) && <button>Change</button>}
      </div>
    </>
  );
};

export default ProfileInput;
