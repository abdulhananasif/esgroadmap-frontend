import React from 'react';
import {ButtonProps} from './type';
import {baseStyles, variants} from './constant';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const appliedVariant = variant || 'primary';

  const style = `${baseStyles} ${variants[appliedVariant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={style}>
      {label}
    </button>
  );
};

export default Button;
