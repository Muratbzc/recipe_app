import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 2rem;
  padding: 2rem 4rem;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const FoodCard = styled.div`
  background-color: ${({ theme }) => theme.colors.navbar};
  border: 1px solid white;
  padding: 1rem;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Texth3 = styled.h5`
  padding: 1rem;
  height: 3.5rem;
  font-size: 1rem;
`;
export const Image = styled.img`
  padding: 2rem;
`;
export const CardButton = styled.button`
  color: ${({ theme }) => theme.colors.body};
  background-color: #782701;
  border-color: white;
  padding: 7px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

export default StyledCard;
