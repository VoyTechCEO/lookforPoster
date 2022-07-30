import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  isImgOversizedState,
  newNicknameState,
  profilePicNameState,
  userDataState,
} from '../../recoil';
import profileInputStyles from './profileInput.module.css';
import ProfileInputContent from '../profileInputContent/ProfileInputContent';
import { useRouter } from 'next/router';
import IUser from '../../interfaces/iUser';

interface Props {
  name: string;
  content: string;
  user: IUser;
}

const ProfileInput = ({ name, content, user }: Props) => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [newNickname, setNewNickname] = useRecoilState(newNicknameState);
  const [profilePicName, setProfilePicName] =
    useRecoilState(profilePicNameState);
  const [isImgOversized, setIsImgOversized] =
    useRecoilState(isImgOversizedState);

  const [isEdit, setIsEdit] = useState(false);
  const [isTaken, setIsTaken] = useState(false);

  const router = useRouter();
  const formRef = useRef(null);

  const onSubmitPicture = async () => {
    try {
      await fetch(`http://localhost:5000/img`, {
        method: `POST`,
        mode: 'cors',
        credentials: 'include',
        body: new FormData(formRef.current!),
      });
      setProfilePicName(``);
      router.push(`/`);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitNickname = async () => {
    try {
      const res = await fetch(`http://localhost:5000/users/update/username`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({ nickname: newNickname }),
      });
      const data = await res.json();
      console.log(data);
      if (!data.isTaken) {
        setIsTaken(false);
        router.push(`/`);
      } else {
        setIsTaken(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        className={`container ${profileInputStyles.container}`}
        method='POST'
        ref={formRef}
        encType={
          name === `Profile picture`
            ? 'multipart/form-data'
            : 'application/x-www-form-urlencoded'
        }
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>{name}</h2>
        {isTaken && (
          <p className={profileInputStyles.error}>Nickname is already taken.</p>
        )}
        {isImgOversized && name === `Profile picture` && (
          <p className={profileInputStyles.error}>Your image is too big.</p>
        )}
        <ProfileInputContent
          name={name}
          content={content}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        {(userData.user === user || name !== `E-mail address`) && !isEdit && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEdit(true);
            }}
          >
            Change
          </button>
        )}
        {isEdit && (
          <>
            <button
              type='submit'
              className={profileInputStyles.save}
              onClick={
                name === `Profile picture` ? onSubmitPicture : onSubmitNickname
              }
            >
              Save
            </button>
            <button
              className={profileInputStyles.cancel}
              onClick={(e) => {
                e.preventDefault();
                setIsEdit(false);
                setNewNickname(``);
                setIsTaken(false);
                setIsImgOversized(false);
                setProfilePicName(``);
              }}
            >
              Cancel
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default ProfileInput;
