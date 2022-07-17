import React, { useState } from 'react';
import profileContainerStyles from './profileContainer.module.css';
import { useRecoilState } from 'recoil';
import { currentProfileUserState, userDataState } from '../../recoil';
import ProfileInput from '../profileInput/ProfileInput';
import { useQuery } from 'react-query';

const ProfileContainer = () => {
  const [currentProfileUser, setCurrentProfileUser] = useRecoilState(
    currentProfileUserState
  );
  const [currentProfilePicture, setCurrentProfilePicture] = useState(``);

  const getProfilePicture = async () => {
    try {
      const resImg = await fetch(`http://localhost:5000/img/erenSuit.png`, {
        method: `GET`,
        mode: 'cors',
        credentials: 'include',
      });
      const imageBlob = await resImg.blob();
      const imageURL = URL.createObjectURL(imageBlob);
      setCurrentProfilePicture(imageURL);
    } catch (err) {
      console.log(err);
    }
  };
  const { isLoading, data } = useQuery(`currentProfilePicture`, async () => {
    await getProfilePicture();
  });

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <section className={`container ${profileContainerStyles.container}`}>
        <ProfileInput name='Profile picture' content={currentProfilePicture} />
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
