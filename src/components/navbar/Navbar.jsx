import React, { useState } from "react";
import Logo from "../../assets/logo1.png";
import Nav, { HomeLogo, NavLinks, NLink, Hamburger } from "./Navbar.Styled";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [ısActive, setIsActive] = useState(false);
  console.log(ısActive);
  return (
    <Nav>
      <div>
        <HomeLogo src={Logo} alt="logo" />
      </div>
      <Hamburger onClick={() => setIsActive(!ısActive)}>
        <GiHamburgerMenu />
      </Hamburger>
      <NavLinks show={ısActive} onClick={() => setIsActive(false)}>
        <NLink to="/home">HOME</NLink>
        <NLink to="/about">ABOUT</NLink>
        <NLink to="/contact">CONTACT</NLink>
        <NLink to="/">LOGOUT</NLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
