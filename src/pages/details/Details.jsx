import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import StyledDetails, {
  DetailsHedar,
  ImageDeteails,
  ItemDiv,
  ListLi,
  ListRecipe,
  ListUl,
} from "./Details.Styled";

const Details = () => {
  const { state: item } = useLocation();
  console.log(item);
  const { recipe } = item;
  return (
    <div>
      <Navbar />
      <DetailsHedar>
        <h2>{recipe.label}</h2>
      </DetailsHedar>
      <StyledDetails>
        <ItemDiv>
          <ListUl>
            <ListLi>calories: {Number(recipe.calories).toFixed(2)}</ListLi>
            {recipe.digest.slice(0, 9).map((nut, index) => {
              const { label, total } = nut;
              return (
                <ListLi key={index}>
                  {label}: {Number(total).toFixed(2)}
                </ListLi>
              );
            })}
          </ListUl>
        </ItemDiv>
        <ItemDiv>
          <ImageDeteails src={recipe.images.REGULAR.url} alt="" />
        </ItemDiv>
        <ItemDiv>
          <ListRecipe>
            {recipe.ingredients.map((ing) => {
              return <ListLi>- {ing.text}</ListLi>;
            })}
          </ListRecipe>
        </ItemDiv>
      </StyledDetails>
    </div>
  );
};

export default Details;
