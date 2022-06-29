import React from 'react';
import userPanelStyles from './userPanelContainer.module.css';
import UserPanel from '../userPanel/UserPanel';

const UserPanelContainer = () => {
  return (
    <>
      <div className={`container ${userPanelStyles.container}`}>
        <button>
          <svg
            height='1.8rem'
            version='1.1'
            viewBox='0 0 52.917 52.917'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='translate(-115.79 -19.591)'>
              <path d='m142.25 72.508h-2.6458v-23.813h-23.812v-5.2917h23.812v-23.813h5.2917v23.813h23.812v5.2917h-23.812v23.813z' />
            </g>
          </svg>
        </button>
        <UserPanel />
      </div>
    </>
  );
};

export default UserPanelContainer;
