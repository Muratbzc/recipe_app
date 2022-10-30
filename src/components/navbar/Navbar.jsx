import React from "react";
import Logo from "../../assets/logo1.png";
import Nav, { HomeLogo, NavLinks, NLink } from "./Navbar.Styled";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <HomeLogo src={Logo} alt="logo" />
      </div>
      <NavLinks>
        <li>
          <NLink to="/home">HOME</NLink>
        </li>
        <li>
          <NLink to="/about">ABOUT</NLink>
        </li>
        <li>
          <NLink to="/contact">CONTACT</NLink>
        </li>
        <li>
          <NLink to="/">LOGOUT</NLink>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
