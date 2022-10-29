import styled from "styled-components";

const StyledHeader = styled.div`
  text-align: center;
`;
export const Texth1 = styled.h1`
  margin-top: 2rem;
`;
export const Form = styled.form`
  border: 2px solid white;
  margin-bottom: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
`;
export const Input = styled.input`
  padding: 9px;
  margin: 5px;
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    order: 1;
  }
`;
export const Button = styled.button`
  padding: 7px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.navbar};
  border-color: white;
  font-size: 1rem;
  color: #782701;
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    order: 3;
  }
`;
export const Select = styled.select`
  margin: 5px;
  padding: 9px;
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    order: 2;
  }
`;

export const BackgroundImg = styled.img`
  margin-top: 2rem;
  width: 80vw;
`;
export default StyledHeader;
