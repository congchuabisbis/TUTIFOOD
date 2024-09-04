import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";



export const Register = () => {
  const [credential, setcredential] = useState({ name: "", email: "", password: "", geolocation: "" });
  const navigate = useNavigate();
  const [validationMsg, setValidationMsg] = useState({
    credential: {
      name: "",
      email: "",
      password: "",
      geolocation: "",
    },
  });

  
  const validateAll = () => {
    const msg = { credential: {} }
  if (!credential.name || credential.name.length < 5) {
    msg.credential.name = "Họ và tên ít nhất 5 kí tự";
  }

  if (!credential.email || !credential.email.includes("@")) {
    msg.credential.email = "Email không hợp lệ";
  }

  if (!credential.password || credential.password.length < 5) {
    msg.credential.password = "Mật khẩu ít nhất 5 kí tự";
  }

  if (!credential.geolocation) {
    msg.credential.geolocation = "Vui lòng nhập địa chỉ";
  }
    setValidationMsg(msg)
    if (Object.keys(msg.credential).length > 0) return false
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validateAll()
    if (!isValid) return

    try {
      const response = await fetch(
        "http://localhost:4000/api/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credential.name,
            email: credential.email,
            password: credential.password,
            local: credential.geolocation,
          }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Lỗi mạng: ${response.status} - ${errorMessage}`);
      }

      const json = await response.json();
      console.log(json);

      if (json.success) {
        alert("Nhập thông tin hợp lệ");
        navigate("/login"); // Điều hướng đến trang đăng nhập
      }

    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  }

  const onChange = (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value });
    setValidationMsg((prevMsg) => ({
      credential: { ...prevMsg.credential, [event.target.name]: "" },
    }));
  }

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>ĐĂNG KÝ</h2>
        <form className="register-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="form-label">Họ và tên</label>
            <input className="form-control" name="name" id="name" placeholder="Họ và tên" value={credential.name} onChange={onChange} />
            <span class="form-message">{validationMsg.credential && validationMsg.credential.name}</span>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input className="form-control" type="text" placeholder="Email" id="email" name="email" value={credential.email} onChange={onChange} />
            <span class="form-message">{validationMsg.credential && validationMsg.credential.email}</span>
          </div>

          <div className="form-group">
            <label htmlFor="geolocation" className="form-label">Địa chỉ</label>
            <input className="form-control" type="text" placeholder="Địa chỉ" id="geolocation" name="geolocation" value={credential.geolocation} onChange={onChange} />
            <span class="form-message">{validationMsg.credential && validationMsg.credential.geolocation}</span>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Mật khẩu</label>
            <input className="form-control" type="password" placeholder="Mật khẩu" id="password" name="password" value={credential.password} onChange={onChange} />
            <span class="form-message">{validationMsg.credential && validationMsg.credential.password}</span>
          </div>




          <button type="submit" className="custom-button" >ĐĂNG KÝ</button>
        </form>
        <Link style={{ "text-decoration": "none" }} to="/login">
          <section className="link-login">Đã có tài khoản? Đăng nhập tại đây.</section>
        </Link>
      </div>
    </div>
  )
}
export default Register