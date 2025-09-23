import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import Loader from '../../../components/Loader';
import { useAuth } from '../hooks/useAuth';

const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await register({ name, email, password, confirmPassword });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 1500);
    } catch (e: any) {
      setError(e.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center' }}>Register</h2>
      {success ? (
        <div style={{ color: 'green', textAlign: 'center', margin: 16 }}>Registration successful! Redirecting...</div>
      ) : (
        <form onSubmit={handleRegister}>
          <InputField
            label="Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <InputField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
          <Button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
            {loading ? <Loader size={18} /> : 'Register'}
          </Button>
        </form>
      )}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
