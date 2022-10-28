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
`;
export const Input = styled.input`
  padding: 7px;
  margin: 5px;
`;
export const Button = styled.button`
  padding: 7px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.navbar};
  border: none;
`;
export const Select = styled.select`
  margin: 5px;
  padding: 7px;
`;
export default StyledHeader;
