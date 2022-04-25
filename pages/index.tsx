import type { NextPage } from 'next';
import Head from 'next/head';
import Overlay from '../components/overlay/Overlay';
import SearchBar from '../components/searchBar/SearchBar';

const Home: NextPage = () => {
  return (
    <main className='main'>
      <Head>
        <title>lookforPoster</title>
        <meta name='description' content='Website made for looking for posts' />
        <meta
          name='keywords'
          content='lookforposter, posts, voytech, voytechceo'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Overlay />
      <SearchBar />
    </main>
  );
};

export default Home;
