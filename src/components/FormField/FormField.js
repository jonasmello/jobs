import React from 'react';

const FormField = (props) => {
  const { placeholder, type, name, value, setState = () => {} } = props;
  return (
    <>
      <input
        placeholder={placeholder}
        type={type || 'text'}
        name={name}
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
};

export default FormField;
