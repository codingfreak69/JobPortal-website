import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'job-seeker',
  });

  const { name, email, password, role } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Register</h1>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <h2>Create an Account</h2>
          <input type="text" name="name" value={name} onChange={onChange} placeholder="Full Name" required />
          <input type="email" name="email" value={email} onChange={onChange} placeholder="Email Address" required />
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
          <select name="role" value={role} onChange={onChange}>
            <option value="job-seeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Register;
