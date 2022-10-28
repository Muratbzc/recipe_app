import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 2rem;
  padding: 2rem 4rem;
`;
export const FoodCard = styled.div`
  background-color: ${({ theme }) => theme.colors.navbar};
  border: 1px solid white;
`;

export const Texth3 = styled.h3`
  padding: 1rem;
  height: 2rem;
`;
export const Image = styled.img`
  padding: 2rem;
`;
export const CardButton = styled.button`
  background-color: ${({ theme }) => theme.colors.body};
  border: 1px solid white;
`;

export default StyledCard;
