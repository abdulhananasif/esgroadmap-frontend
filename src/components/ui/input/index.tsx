// Input.tsx
import React from 'react';
import {InputProps} from './type';

const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  id,
  type = 'text',
  ...rest
}) => {
  const isCheckbox = type === 'checkbox';

  return (
    <div className={`flex flex-col ${!isCheckbox ? 'space-y-1' : 'space-y-0'}`}>
      <div className={`flex ${isCheckbox ? 'items-center gap-2' : 'flex-col'}`}>
        {isCheckbox ? (
          <>
            <input
              id={id}
              type="checkbox"
              className="w-4 h-4 accent-[#219E99]"
              {...rest}
            />
            {label && (
              <label htmlFor={id} className="text-sm font-medium">
                {label}
              </label>
            )}
          </>
        ) : (
          <>
            {label && id && (
              <label htmlFor={id} className="font-medium mb-1 block">
                {label}
              </label>
            )}
            <div className="w-full flex items-center gap-2">
              <input
                id={id}
                type={type}
                {...rest}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <span className="font-bold text-lg">*</span>
            </div>
          </>
        )}
      </div>

      {!isCheckbox && errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
