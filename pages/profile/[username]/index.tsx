import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import HeadSetter from '../../../components/headSetter/HeadSetter';
import Overlay from '../../../components/overlay/Overlay';
import ProfileContainer from '../../../components/profileContainer/ProfileContainer';
import { currentProfileUserState } from '../../../recoil';
import IUser from '../../../interfaces/iUser';

interface Props {
  user: IUser;
}

const profile = ({ user }: Props) => {
  const [currentProfileUser, setCurrentProfileUser] = useRecoilState(
    currentProfileUserState
  );

  useEffect(() => {
    setCurrentProfileUser(user);
  }, [user]);

  return (
    <main className='main'>
      <HeadSetter title='Log in' />
      <Overlay children={<ProfileContainer />} />
    </main>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const res = await fetch(
      `http://localhost:5000/users/${context.params?.username}`
    );
    const user: IUser = await res.json();

    return {
      props: { user },
    };
  } catch (err) {
    console.log(err);
  }
};

export default profile;
