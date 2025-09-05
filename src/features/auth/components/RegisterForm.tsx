import React, { useState } from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

type Props = {
  onRegister: (email: string, password: string, confirmPassword: string) => Promise<void> | void;
  loading?: boolean;
  error?: string;
};

const RegisterForm: React.FC<Props> = ({ onRegister, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onRegister(email, password, confirmPassword);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 340, margin: '0 auto' }}>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        autoComplete="username"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        autoComplete="new-password"
      />
      <InputField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        required
        autoComplete="new-password"
      />
      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      <Button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </form>
  );
};

export default RegisterForm;
