import React, { useState, } from "react";
import '../styles/login.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [credential, setcredential] = useState({ email: "", password: "", });
  // Sử dụng trong hàm xử lý chuyển hướng
  const navigate = useNavigate();

  const [validationMsg, setValidationMsg] = useState({
    credential: {
      email: "",
      password: "",
      
    },
  });

    const [errorMsg, setErrorMsg] = useState("");

  const validateAll = () => {
    const msg = { credential: {} }

    if (!credential.email.trim()) {
      msg.credential.email = "Vui lòng nhập email";
    }
    if (!credential.password.trim()) {
      msg.credential.password = "Vui lòng nhập mật khẩu";
    }
    setValidationMsg(msg)

    if (Object.keys(msg.credential).length > 0)  return false
    return true
  }


  //Hàm xử lý onSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateAll()
    if (!isValid) return
    try {
      const response = await fetch("http://localhost:4000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
      });

      const json = await response.json();
      
      //Chuyển hướng ra trang chủ
      if (json.success) {
        localStorage.setItem("userEmail", credential.email)
        localStorage.setItem("authToken", json.authToken)
        if (json.isAdmin) {
        // Có vai trò admin
        console.log("Người dùng có vai trò admin"); 
        // Thực hiện các hành động admin
        }
        navigate('/home');
      }
      else {
        setErrorMsg(json.error);
      }
      


    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };
  // Xử lý onChange
  const onChange = (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value });

    setValidationMsg((prevMsg) => ({
      credential: { ...prevMsg.credential, [event.target.name]: "" },
    }));

    setErrorMsg(""); // Reset thông báo lỗi chung khi thay đổi input
  };

  return (
    <div className="App">
      <div className="App">

        <div className="auth-form-container">
          <h2>ĐĂNG NHẬP</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input value={credential.email} onChange={onChange} type="Email" placeholder="Email" id="email" name="email" />
            <span class="form-message">{validationMsg.credential && validationMsg.credential.email}</span>

            <label htmlFor="password"></label>
            <input value={credential.password} onChange={onChange} type="Password" placeholder="Mật khẩu" id="password" name="password" />
            <span class="form-message">{validationMsg.credential && validationMsg.credential.password}</span>

            <span className="form-message">{errorMsg}</span>
            <button type="submit" className="custom-button"> ĐĂNG NHẬP </button>
          </form>

          <Link style={{ "text-decoration": "none" }} to="/register">
            <section className="link-register">Chưa có tài khoản? Đăng ký tại đây</section>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Login