import React from 'react';
import profileContainerStyles from './profileContainer.module.css';
import { useRecoilState } from 'recoil';
import { currentProfileUserState, userDataState } from '../../recoil';
import ProfileInput from '../profileInput/ProfileInput';

const ProfileContainer = () => {
  // weź tu kurwa sprawdzaj hookiem czy profil należy do zalogowanego użytkownika, od tego zależy czy ma opcje edytowania
  const [userData, setUserData] = useRecoilState(userDataState);
  const [currentProfileUser, setCurrentProfileUser] = useRecoilState(
    currentProfileUserState
  );

  return (
    <>
      <section className={`container ${profileContainerStyles.container}`}>
        <ProfileInput name='Nickname' content={currentProfileUser.nickname} />
        <ProfileInput
          name='E-mail address'
          content={currentProfileUser.email}
        />
      </section>
    </>
  );
};

export default ProfileContainer;
