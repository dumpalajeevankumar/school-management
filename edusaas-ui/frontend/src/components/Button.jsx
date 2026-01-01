import React from 'react';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false, 
  onClick, 
  loading = false,
  className = ''
}) => {
  const baseClass = `btn btn-${variant} btn-${size}`;
  
  return (
    <button
      type={type}
      className={`${baseClass} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <Loader size="sm" /> : children}
    </button>
  );
};

const Loader = ({ size = 'md' }) => (
  <span className={`loader loader-${size}`} />
);

export default Button;
