import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import Nav, { HomeLogo, NavLinks, NLink } from "./Navbar.Styled";

const Navbar = () => {
  return (
    <Nav>
      <HomeLogo src={Logo} alt="logo" />
      <NavLinks>
        <li>
          <NLink to="/">HOME</NLink>
        </li>
        <li>
          <NLink to="/about">ABOUT</NLink>
        </li>
        <li>
          <NLink to="/github">CONTACT</NLink>
        </li>
        <li>
          <NLink to="/login">LOGOUT</NLink>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
