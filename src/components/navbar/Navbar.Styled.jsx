import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 3rem;
  gap: 1rem 0;
  background-color: ${({ theme }) => theme.colors.navbar};
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    padding: 1rem 2rem;
  }
`;

export const HomeLogo = styled.img`
  width: 120px;
  height: 70px;
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    width: 110px;
    height: 60px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  padding-left: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: flex;
    align-items: center;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    flex-direction: column;
    width: 100%;
    align-items: start;
    gap: 0.5rem;
  }
  max-height: ${({ show }) => (show ? "200px" : "0")};
  overflow: hidden;
`;

export const NLink = styled(Link)`
  text-decoration: none;
  color: #782701;
  font-weight: bold;
  font-size: 1.2rem;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    border-bottom: 2px solid white;
    width: 8rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    width: 100%;
    font-size: 1rem;
  }
`;

export default Nav;
