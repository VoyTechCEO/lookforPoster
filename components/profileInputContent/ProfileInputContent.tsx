import React from 'react';
import { useRecoilState } from 'recoil';
import {
  isImgOversizedState,
  newNicknameState,
  profilePicNameState,
} from '../../recoil';
import profileInputContentStyles from './profileInputContent.module.css';

interface Props {
  name: string;
  content: string;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileInputContent = ({ name, content, isEdit, setIsEdit }: Props) => {
  const [newNickname, setNewNickname] = useRecoilState(newNicknameState);
  const [profilePicName, setProfilePicName] =
    useRecoilState(profilePicNameState);
  const [isImgOversized, setIsImgOversized] =
    useRecoilState(isImgOversizedState);

  if (isEdit) {
    if (name === `Profile picture`) {
      return (
        <>
          <div className={profileInputContentStyles.file}>
            <label htmlFor='file'>
              {profilePicName === `` ? (
                <svg
                  height='2.5rem'
                  version='1.1'
                  viewBox='0 0 52.917 52.917'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g transform='translate(-115.79 -19.591)'>
                    <path d='m142.25 72.508h-2.6458v-23.813h-23.812v-5.2917h23.812v-23.813h5.2917v23.813h23.812v5.2917h-23.812v23.813z' />
                  </g>
                </svg>
              ) : (
                <p>
                  {profilePicName.length > 9
                    ? `${profilePicName.substring(0, 9)}...`
                    : profilePicName}
                </p>
              )}
            </label>
            <input
              id='file'
              name='profile_picture'
              type='file'
              accept='image/jpg, image/jpeg, image/png, image/webp, image/apng'
              onChange={(e) => {
                if (e.target.files![0]) {
                  if (e.target.files![0].size < 1024 * 1024) {
                    setProfilePicName(e.target.files![0].name);
                    setIsImgOversized(false);
                  } else {
                    setIsImgOversized(true);
                  }
                }
              }}
            />
          </div>
        </>
      );
    }

    return (
      <>
        <input
          className={profileInputContentStyles.input}
          type='text'
          maxLength={12}
          required
          autoFocus
          value={newNickname}
          onChange={(e) => {
            setNewNickname(e.target.value);
          }}
        />
      </>
    );
  }

  if (name === `Profile picture`) {
    return (
      <>
        <div className={profileInputContentStyles.picture}>
          <img src={content} alt='profile picture' />
        </div>
      </>
    );
  }

  return (
    <>
      <p>{content}</p>
    </>
  );
};

export default ProfileInputContent;
