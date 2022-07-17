import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  currentProfileUserState,
  newNicknameState,
  userDataState,
} from '../../recoil';
import profileInputStyles from './profileInput.module.css';
import ProfileInputContent from '../profileInputContent/ProfileInputContent';
import { useRouter } from 'next/router';

interface Props {
  name: string;
  content: string;
}

const ProfileInput = ({ name, content }: Props) => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [currentProfileUser, setCurrentProfileUser] = useRecoilState(
    currentProfileUserState
  );
  const [newNickname, setNewNickname] = useRecoilState(newNicknameState);

  const [isEdit, setIsEdit] = useState(false);
  const [isTaken, setIsTaken] = useState(false);

  const router = useRouter();

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
      // get the responses and check if the nickname is taken
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        className={`container ${profileInputStyles.container}`}
        method='POST'
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
        <ProfileInputContent
          name={name}
          content={content}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        {(userData.user === currentProfileUser || name !== `E-mail address`) &&
          !isEdit && (
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
              className={profileInputStyles.save}
              onClick={onSubmitNickname}
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
