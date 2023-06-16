import React from 'react';

const InputUnderBar = ({ className, item, style, onSave }) => {
  const handleChange = (e) => {
    onSave(e.target.value);
  };

  return (
    <div className={className}>
      <input
        className='input-under-bar ft14r'
        type='text'
        placeholder={item}
        style={style}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputUnderBar;
