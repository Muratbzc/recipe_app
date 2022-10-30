import styled from "styled-components";

const StyledContact = styled.div`
  background-color: ${({ theme }) => theme.colors.var5};
  margin-top: 5rem;
`;

export const ContactText = styled.h2`
  color: white;
  text-align: center;
  padding: 3rem;
`;
export const IconsSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 2rem;
`;

export const Icons = styled.a`
  color: white;
  font-size: 4rem;
  &:hover {
    transform: scale(1.2);
    color: white;
  }
`;

export default StyledContact;
