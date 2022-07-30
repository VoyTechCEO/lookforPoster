import React, { useState } from 'react';
import profileContainerStyles from './profileContainer.module.css';
import ProfileInput from '../profileInput/ProfileInput';
import { useQuery } from 'react-query';
import IUser from '../../interfaces/iUser';

interface Props {
  user: IUser;
}

const ProfileContainer = ({ user }: Props) => {
  const [currentProfilePicture, setCurrentProfilePicture] = useState(``);

  const getProfilePicture = async () => {
    try {
      const resImg = await fetch(`http://localhost:5000/img/${user.picture}`, {
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
  const { isLoading } = useQuery(`currentProfilePicture`, async () => {
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
        <ProfileInput
          name='Profile picture'
          content={currentProfilePicture}
          user={user}
        />
        <ProfileInput name='Nickname' content={user.nickname} user={user} />
        <ProfileInput name='E-mail address' content={user.email} user={user} />
      </section>
    </>
  );
};

export default ProfileContainer;
