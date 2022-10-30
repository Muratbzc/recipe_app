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
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    padding: 1rem;
    outline-offset: 0.5rem;
  }
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
  padding: 2rem;
  list-style-type: none;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    padding: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
    gap: 0 2rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    font-size: 11px;
    gap: 0 1rem;
    padding: 0.5rem;
  }
`;
export const ListRecipe = styled(ListUl)`
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: block;
    font-size: 14px;
  }
`;
export const ListLi = styled.li`
  margin-bottom: 0.7rem;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    margin-bottom: 0.4rem;
  }
`;
export const ImageDeteails = styled.img`
  border: 2px solid white;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    width: 200px;
  }
`;

export const ItemDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: center;
`;

export default StyledDetails;
