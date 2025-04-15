import React from 'react';
import {InputProps} from './type';

const Input: React.FC<InputProps> = ({label, errorMessage, id, ...rest}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && id && (
        <label htmlFor={id} className="font-medium mb-1 block">
          {label}
        </label>
      )}
      <input
        id={id}
        {...rest}
        className="px-3 py-2 border border-gray-300 rounded"
      />
      {errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
