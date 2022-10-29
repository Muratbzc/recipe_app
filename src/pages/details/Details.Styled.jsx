import styled from "styled-components";

const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.navbar};
  gap: 1rem;
  outline: 2px solid ${({ theme }) => theme.colors.navbar};
  border: 2px solid white;
  outline-offset: 1rem;
  margin: 1rem;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DetailsHedar = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const ListUl = styled.ul`
  border: 2px solid white;
  padding: 1rem;
  list-style-type: none;
`;
export const ListLi = styled.li`
  margin-bottom: 0.7rem;
`;
export const ImageDeteails = styled.img`
  border: 2px solid white;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    width: 200px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    order: 1;
  }
`;

export const ItemDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: center;
`;

export default StyledDetails;
