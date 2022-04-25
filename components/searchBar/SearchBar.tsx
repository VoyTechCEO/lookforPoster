import React, { useState } from 'react';
import searchBarStyles from './searchBar.module.css';
import { useSpring, animated } from 'react-spring';

const SearchBar = () => {
  const [value, setValue] = useState(``);

  // animations
  const [activeSearchBar, animateActiveSearchBar] = useSpring(() => ({
    from: { top: `50%` },
  }));

  const [activeText, animateActiveText] = useSpring(() => ({
    from: { opacity: 1 },
  }));

  const [activeBtn, animateActiveBtn] = useSpring(() => ({
    from: { visibility: `visible` },
  }));

  const [activeRightSvg, animateActiveRightSvg] = useSpring(() => ({
    from: { rotateZ: 90, opacity: 0 },
  }));

  const [activeRightBtn, animateActiveRightBtn] = useSpring(() => ({
    from: { visibility: `hidden` },
  }));

  return (
    <>
      <animated.form
        className={`container ${searchBarStyles.container}`}
        style={activeSearchBar}
      >
        <animated.label className={searchBarStyles.text} style={activeText}>
          Search for the posts you wish to see
        </animated.label>
        <div className={searchBarStyles.bar}>
          <input
            className={searchBarStyles.search}
            type='text'
            onFocus={() => {
              animateActiveSearchBar.start({ top: `20%` });
              animateActiveText.start({ opacity: 0 });
              animateActiveBtn.start({ visibility: `hidden`, delay: 150 });
              animateActiveRightBtn.start({ visibility: `visible` });
              animateActiveRightSvg.start({ rotateZ: 0, opacity: 1 });
            }}
            onBlur={() => {
              if (value.replace(/\s/g, '') === ``) {
                animateActiveSearchBar.start({ top: `50%` });
                animateActiveText.start({ opacity: 1 });
                animateActiveBtn.start({ visibility: `visible` });
                animateActiveRightBtn.start({
                  visibility: `hidden`,
                  delay: 150,
                });
              }
              animateActiveRightSvg.start({ rotateZ: 90, opacity: 0 });
            }}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <animated.button
            className={searchBarStyles.right_btn}
            style={activeRightBtn}
          >
            <animated.svg
              style={activeRightSvg}
              height='1.8rem'
              version='1.1'
              viewBox='0 0 52.917 52.917'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g transform='translate(-115.79 -19.591)'>
                <path d='m142.25 72.508h-2.6458v-23.813h-23.812v-5.2917h23.812v-23.813h5.2917v23.813h23.812v5.2917h-23.812v23.813z' />
              </g>
            </animated.svg>
          </animated.button>
        </div>
        <animated.button className={searchBarStyles.btn} style={activeBtn}>
          <animated.svg
            style={activeText}
            height='1.5rem'
            version='1.1'
            viewBox='0 0 52.917 52.917'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='translate(-115.79 -19.591)'>
              <path d='m142.25 72.508h-2.6458v-23.813h-23.812v-5.2917h23.812v-23.813h5.2917v23.813h23.812v5.2917h-23.812v23.813z' />
            </g>
          </animated.svg>

          <animated.p style={activeText}>Add new post</animated.p>
        </animated.button>
      </animated.form>
    </>
  );
};

export default SearchBar;
