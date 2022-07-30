import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import HeadSetter from '../../../components/headSetter/HeadSetter';
import Overlay from '../../../components/overlay/Overlay';
import ProfileContainer from '../../../components/profileContainer/ProfileContainer';
import IUser from '../../../interfaces/iUser';

interface Props {
  user: IUser;
}

const profile = ({ user }: Props) => {
  return (
    <main className='main'>
      <HeadSetter title='Log in' />
      <Overlay children={<ProfileContainer user={user} />} />
    </main>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const resUser = await fetch(
      `http://localhost:5000/users/${context.params?.username}`,
      {
        method: `GET`,
        mode: 'cors',
        credentials: 'include',
      }
    );
    const user: IUser = await resUser.json();

    return {
      props: { user },
    };
  } catch (err) {
    console.log(err);
  }
};

export default profile;
