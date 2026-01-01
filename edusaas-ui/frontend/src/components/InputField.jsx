import React from 'react';

const InputField = ({ 
  label, 
  type = 'text', 
  placeholder, 
  icon, 
  value, 
  onChange, 
  error,
  disabled = false 
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {icon && <img src={icon} alt="icon" className="input-icon" />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`input-field ${error ? 'input-error' : ''}`}
        />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
