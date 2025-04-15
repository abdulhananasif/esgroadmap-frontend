import React, {useState} from 'react';
import {InputProps} from './type';

const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  id,
  type = 'text',
  ...rest
}) => {
  const isCheckbox = type === 'checkbox';
  const isRadio = type === 'radio';
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  const isCheckLike = isCheckbox || isRadio;

  return (
    <div
      className={`flex flex-col ${!isCheckLike ? 'space-y-1' : 'space-y-0'}`}
    >
      <div
        className={`flex ${isCheckLike ? 'items-center gap-2' : 'flex-col'}`}
      >
        {isCheckLike ? (
          <>
            <input
              id={id}
              type={type}
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
            <div className="w-full flex items-center gap-2 relative">
              <input
                id={id}
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                {...rest}
                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
              />
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-6 text-gray-600"
                >
                  {showPassword ? (
                    <img
                      src="/icons/eye-close.svg"
                      alt="eye-close"
                      className="h-4 w-4"
                    />
                  ) : (
                    <img
                      src="/icons/eye-open.svg"
                      alt="eye-open"
                      className="h-4 w-4"
                    />
                  )}
                </button>
              )}
              <span className="font-bold text-lg">*</span>
            </div>
          </>
        )}
      </div>

      {!isCheckLike && errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
