import React, { useState } from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

type Props = {
  onLogin: (email: string, password: string) => Promise<void> | void;
  loading?: boolean;
  error?: string;
};

const LoginForm: React.FC<Props> = ({ onLogin, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onLogin(email, password);
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
        autoComplete="current-password"
      />
      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      <Button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
