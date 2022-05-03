import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  desc?: string;
  keywords?: string;
}

const HeadSetter = ({ title, desc, keywords }: Props) => {
  return (
    <Head>
      <title>{title ? title : `lookforPoster`}</title>
      <meta
        name='description'
        content={desc ? desc : `Website made for looking for posts`}
      />
      <meta
        name='keywords'
        content={
          keywords ? keywords : `lookforposter, posts, voytech, voytechceo`
        }
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadSetter;
