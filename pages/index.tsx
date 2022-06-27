import type { NextPage } from 'next';
import HeadSetter from '../components/headSetter/HeadSetter';
import Overlay from '../components/overlay/Overlay';
import SearchBar from '../components/searchBar/SearchBar';

const Home: NextPage = () => {
  return (
    <main className='main'>
      <HeadSetter />
      <Overlay children={<SearchBar />} />
    </main>
  );
};

export default Home;
