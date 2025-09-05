import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { useAuth } from '../hooks/useAuth';

const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(email: string, password: string, confirmPassword: string) {
    setError(null);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await register(email, password);
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
        <RegisterForm onRegister={handleRegister} loading={loading} error={error || undefined} />
      )}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
