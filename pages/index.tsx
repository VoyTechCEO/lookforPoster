import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>lookforPoster</title>
        <meta name='description' content='Website made for looking for posts' />
        <meta
          name='keywords'
          content='lookforposter, posts, voytech, voytechceo'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Home;
