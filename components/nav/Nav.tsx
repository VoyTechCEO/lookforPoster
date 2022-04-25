import Link from 'next/link';
import React from 'react';
import navStyles from './nav.module.css';

const Nav = () => {
  return (
    <>
      <nav className={`container ${navStyles.container}`}>
        <div className={navStyles.part}></div>
        <div className={navStyles.part}>
          <Link href='/'>lookforPoster</Link>
        </div>
        <div className={navStyles.part}>
          <Link href='/login'>Log in</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
