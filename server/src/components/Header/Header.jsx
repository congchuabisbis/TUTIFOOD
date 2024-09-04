import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {  useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";
const nav__links = [
  {
    display: "Trang chủ",
    path: "/home",
  },
  {
    display: "Giới Thiệu",
    path: "/gioithieu",
  },
  {
    display: "Thực Đơn",
    path: "/menu",
  },
  {
    display: "Khuyến Mãi",
    path: "/khuyenmai",
  },
  {
    display: "Đơn Hàng",
    path: "/order",
  },
  {
    display: "Liên Hệ",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuanity = useSelector((state) => state.cart.totalQuanity);
  const isAuthToken = !!localStorage.getItem("authToken")
  const dispatch = useDispatch();

  const toggleCart = () =>{
      dispatch(cartUiActions.toggleVisible())

    }
  //Xử lý logout
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };


  const toggleMenu = () => menuRef.current.classList.toggle("show__thanhmenu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div
          className="nav__wrapper d-flex align-items-center
            justify-content-between "
        >
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/*=====menu=====*/}
          <div className="navigation" ref={menuRef}>
            <div className="thanhmenu d-flex align-item-center gap-5">
              {nav__links.map((item, index) => (isAuthToken || item.path !=="/order") &&(
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__thanhmenu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/*===nav right icons===*/}
          {
            (!localStorage.getItem("authToken")) ?

              <div className="nav__right d-flex align-items-center gap-5">
                
                <Link className="btn bg-white text-dark mx-1" to="/login">Đăng nhập</Link>
                <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>

              </div>
              :
              <div className="nav__right d-flex align-items-center gap-5">
                <span className="cart__icon" onClick={toggleCart}>
                  <i className="ri-shopping-basket-line"></i>
                  <span className="cart__badge">{totalQuanity}</span>
                </span>

                <span className="user">
                  <Link to="/">
                    <i className="ri-user-line"></i>
                  </Link>
                </span>

                <div className="btn bg-white text-danger mx-2" onClick={handleLogOut}>
                  Đăng xuất
                </div>

              </div>
          }

        </div>
      </Container>
    </header>
  );
};

export default Header;
