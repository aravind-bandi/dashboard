import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaExclamationCircle } from 'react-icons/fa';
import '../Login/AuthStyles.css'; // Adjust the path as necessary

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignupPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Signup data:', data);
      setIsSubmitting(false);
      navigate('/'); // Redirect to dashboard after signup
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className={`form-group ${errors.name ? 'error' : ''}`}>
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              {...register('name')}
            />
            {errors.name && (
              <div className="error-message">
                <FaExclamationCircle /> {errors.name.message}
              </div>
            )}
          </div>

          <div className={`form-group ${errors.email ? 'error' : ''}`}>
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && (
              <div className="error-message">
                <FaExclamationCircle /> {errors.email.message}
              </div>
            )}
          </div>

          <div className={`form-group ${errors.password ? 'error' : ''}`}>
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <div className="error-message">
                <FaExclamationCircle /> {errors.password.message}
              </div>
            )}
          </div>

          <div className={`form-group ${errors.confirmPassword ? 'error' : ''}`}>
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <div className="error-message">
                <FaExclamationCircle /> {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <div className="terms">
            <label>
              <input type="checkbox" required />
              <span>I agree to the <a href="#terms">Terms and Conditions</a></span>
            </label>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="switch-link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;