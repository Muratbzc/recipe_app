import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.navbar};
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
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
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const NLink = styled(Link)`
  text-decoration: none;
  color: #782701;
  font-weight: bold;
  font-size: 1.2rem;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    font-size: 1rem;
  }
`;

export default Nav;
