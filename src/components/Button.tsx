import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => (
  <button
    {...props}
    className={`btn ${variant}`}
    style={{
      padding: '8px 16px',
      borderRadius: 4,
      border: 'none',
      background: variant === 'primary' ? '#007bff' : '#6c757d',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 600,
      marginTop: 8,
      ...props.style,
    }}
  >
    {children}
  </button>
);

export default Button;
