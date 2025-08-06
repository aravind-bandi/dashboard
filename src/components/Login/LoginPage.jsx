// LoginPage.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaExclamationCircle } from 'react-icons/fa';
import './AuthStyles.css';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setLoginError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, accept any non-empty password
      if (data.email && data.password) {
        // Store authentication state
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
        navigate('/');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setLoginError(error.message || 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Log in to your account</p>
        </div>
        
        {loginError && (
          <div className="auth-error">
            <FaExclamationCircle /> {loginError}
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          {/* ... rest of your login form remains the same ... */}
        </form>

        <div className="auth-switch">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="switch-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;