import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import Loader from '../../../components/Loader';
import { useAuth } from '../hooks/useAuth';

const ForgotPasswordPage: React.FC = () => {
  const { forgotPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await forgotPassword(email);
      setSuccess(true);
    } catch (e: any) {
      setError(e.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>
      {success ? (
        <div style={{ color: 'green', textAlign: 'center', margin: 16 }}>
          Password reset email sent! Please check your inbox.
        </div>
      ) : (
        <form onSubmit={handleForgotPassword}>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
          <Button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
            {loading ? <Loader size={18} /> : 'Send Reset Link'}
          </Button>
        </form>
      )}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
