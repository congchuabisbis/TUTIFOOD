import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

import { UseSelector, useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

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
              {nav__links.map((item, index) => (
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
          <div className="nav__right d-flex align-items-center gap-5">
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuanity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
