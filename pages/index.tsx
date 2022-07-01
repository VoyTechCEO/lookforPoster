import type { NextPage } from 'next';
import HeadSetter from '../components/headSetter/HeadSetter';
import Overlay from '../components/overlay/Overlay';
import SearchBar from '../components/searchBar/SearchBar';
import RegisterSuccessPopout from '../components/registerSuccessPopout/RegisterSuccessPopout';
import { useRecoilState } from 'recoil';
import { isRegisterSuccessState } from '../recoil';

const Home: NextPage = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useRecoilState(
    isRegisterSuccessState
  );

  return (
    <main className='main'>
      <HeadSetter />
      <Overlay
        children={
          <>
            {isRegisterSuccess && <RegisterSuccessPopout />}
            <SearchBar />
          </>
        }
      />
    </main>
  );
};

export default Home;
