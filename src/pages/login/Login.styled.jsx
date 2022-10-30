import styled from "styled-components";
import imgbg from "../../assets/7.jpg";

const StyledLogin = styled.div`
  background-image: url(${imgbg});
  background-size: cover;
  padding: 1px;
  height: 100vh;
`;
export const LoginSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  background-color: white;
  opacity: 0.9;
  width: 350px;
  margin: 5rem auto;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    width: 200px;
  }
`;
export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

export const LoginImg = styled.img`
  width: 200px;
  border: 2px solid #d0e7ed;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    width: 100px;
  }
`;
export const Loginh = styled.h2`
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.var1};
  text-align: center;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    font-size: 1.5rem;
  }
`;

export const LoginInput = styled.input`
  border: 2px solid #d0e7ed;
  padding: 0.5rem;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border-radius: 10px;
`;

export default StyledLogin;
