import React from "react";
import { useLocation } from "react-router-dom";
import StyledDetails, {
  DetailsHedar,
  ImageDeteails,
  ItemDiv,
  ListLi,
  ListUl,
} from "./Details.Styled";

const Details = () => {
  const { state: item } = useLocation();
  console.log(item);
  const { recipe } = item;
  return (
    <div>
      <DetailsHedar>
        <h1>{recipe.label}</h1>
      </DetailsHedar>
      <StyledDetails>
        <ItemDiv>
          <ListUl>
            <ListLi>-Nutrients-</ListLi>
            <ListLi>calories: {Number(recipe.calories).toFixed(2)}</ListLi>
            {recipe.digest.slice(0, 8).map((nut, index) => {
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
          <ListUl>
            {recipe.ingredients.map((ing) => {
              return <ListLi>- {ing.text}</ListLi>;
            })}
          </ListUl>
        </ItemDiv>
      </StyledDetails>
    </div>
  );
};

export default Details;
