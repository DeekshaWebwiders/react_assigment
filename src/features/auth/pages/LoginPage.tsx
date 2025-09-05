import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleLogin(email: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
      navigate('/'); // Redirect to home on success
    } catch (e: any) {
      setError(e.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <LoginForm onLogin={handleLogin} loading={loading} error={error || undefined} />
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span>Don't have an account? </span>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default LoginPage;
