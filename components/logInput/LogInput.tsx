import React from 'react';
import logInputStyles from './logInput.module.css';

interface Props {
  label: string;
}

const LogInput = ({ label }: Props) => {
  return (
    <>
      <div className={`container ${logInputStyles.container}`}>
        <input type='text' placeholder={label} />
      </div>
    </>
  );
};

export default LogInput;
