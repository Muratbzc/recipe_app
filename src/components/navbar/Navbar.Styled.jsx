import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.navbar};
`;

export const HomeLogo = styled.img`
  width: 120px;
  height: 70px;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 2rem;
`;

export const NLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
`;

export default Nav;
