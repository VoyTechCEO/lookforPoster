import React from 'react';
import logInputStyles from './logInput.module.css';

interface Props {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

const LogInput = ({ label, state, setState, type }: Props) => {
  return (
    <>
      <div className={`container ${logInputStyles.container}`}>
        <input
          type={type ? type : 'text'}
          placeholder={label}
          required
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default LogInput;
