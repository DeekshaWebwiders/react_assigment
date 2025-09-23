import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
    <input
      {...props}
      style={{
        width: '100%',
        padding: 8,
        boxSizing: 'border-box',
        borderRadius: 4,
        border: '1px solid #ccc',
        fontSize: 16,
      }}
    />
  </div>
);

export default InputField;
