import React, { useState } from "react";
  import '../styles/login.css';
  import { Link } from "react-router-dom";

  export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
    }

    return (
      <div className="App">
        <div className="App">
          <div className="auth-form-container">
            <h2>ĐĂNG NHẬP</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email"></label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="Email" id="email" name="email" />
              <label htmlFor="password"></label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="Mật khẩu" id="password" name="password" />
              <button type="submit" className="custom-button"> ĐĂNG NHẬP </button>
            </form>

            <Link to="/register">
              <section className="link-register">Chưa có tài khoản? Đăng ký tại đây</section>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  export default Login