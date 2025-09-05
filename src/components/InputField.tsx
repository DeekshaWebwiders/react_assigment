import React from 'react';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => (
  <div style={{ marginBottom: 12 }}>
    <label style={{ display: 'block', marginBottom: 4, fontWeight: 500 }}>{label}</label>
    <input
      {...props}
      style={{
        width: '100%',
        padding: '8px',
        borderRadius: 4,
        border: '1px solid #ccc',
        fontSize: 16,
      }}
    />
  </div>
);

export default InputField;
