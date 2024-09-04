import React, { useState } from "react";
import '../styles/login.css';
import { Link } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>ĐĂNG KÝ</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Họ và tên" />
          <label htmlFor="email"></label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
          <label htmlFor="password"></label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Mật khẩu" id="password" name="password" />
          <button type="submit" className="custom-button" >ĐĂNG KÝ</button>
        </form>
        <Link to="/login">
          <section className="link-login">Đã có tài khoản? Đăng nhập tại đây.</section>
        </Link>
      </div>
    </div>
  )
}
export default Register