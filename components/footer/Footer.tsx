import React from 'react';
import footerStyles from './footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={`container ${footerStyles.container}`}>
        <div className={footerStyles.logo}>
          <a
            href='https://github.com/VoyTechCEO'
            target='_blank'
            rel='noreferrer'
          >
            by VoyTech
          </a>
          <a
            href='https://github.com/VoyTechCEO/lookforPoster'
            target='_blank'
            rel='noreferrer'
          >
            go to Github page
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
