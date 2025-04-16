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

  const wrapperClass = `flex flex-col ${
    !isCheckLike ? 'space-y-1' : 'space-y-0'
  }`;
  const innerWrapperClass = `flex ${
    isCheckLike ? 'items-center gap-2' : 'flex-col'
  }`;
  const textInputClass =
    'w-full px-3 py-2 border bordergray whitebg rounded-md pr-10';
  const checkRadioInputClass = 'w-4 h-4';
  const labelClass = isCheckLike
    ? 'text-sm font-medium'
    : 'font-medium mb-1 block';

  return (
    <div className={wrapperClass}>
      <div className={innerWrapperClass}>
        {isCheckLike ? (
          <>
            <input
              id={id}
              type={type}
              className={checkRadioInputClass}
              {...rest}
            />
            {label && (
              <label htmlFor={id} className={labelClass}>
                {label}
              </label>
            )}
          </>
        ) : (
          <>
            {label && id && (
              <label htmlFor={id} className={labelClass}>
                {label}
              </label>
            )}
            <div className="w-full flex items-center gap-2 relative">
              <input
                id={id}
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                {...rest}
                className={textInputClass}
              />
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-6 textgray"
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
