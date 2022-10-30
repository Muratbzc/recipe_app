import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: ${({ theme }) => theme.colors.var4};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3rem;
  padding: 2rem 0;
  gap: 1rem;
`;
export const StyledAboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  border: 5px solid black;
`;

export const AboutImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 30px;
  margin-top: 1rem;
`;
export const AboutTitle = styled.h5`
  text-align: center;
`;
export const AboutText = styled.p`
  border: 2px solid white;
  padding: 2rem 1rem;
  font-weight: bold;
`;

export default StyledAbout;
