import React from "react";
import StyledCard, { CardButton, FoodCard, Image, Texth3 } from "./Card.Styled";

const Card = ({ recipe }) => {
  return (
    <StyledCard>
      {recipe.map((item, index) => {
        const { recipe } = item;
        return (
          <FoodCard key={index}>
            <Texth3>{recipe?.label}</Texth3>
            <Image src={recipe?.images?.THUMBNAIL?.url} alt="" />
            <br />
            <CardButton>View More</CardButton>
          </FoodCard>
        );
      })}
    </StyledCard>
  );
};

export default Card;
