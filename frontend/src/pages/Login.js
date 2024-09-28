import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Login</h1>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/register">Register</a>
        </nav>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <h2>Login to Your Account</h2>
          <input type="email" name="email" value={email} onChange={onChange} placeholder="Email Address" required />
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
