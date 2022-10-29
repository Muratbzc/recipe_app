import React from "react";
import { useNavigate } from "react-router-dom";
import StyledCard, { CardButton, FoodCard, Image, Texth3 } from "./Card.Styled";

const Card = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <StyledCard>
      {recipe.map((item, index) => {
        const { recipe } = item;
        return (
          <FoodCard key={index}>
            <Texth3>{recipe?.label}</Texth3>
            <Image src={recipe?.images?.THUMBNAIL?.url} alt="" />
            <br />
            <CardButton onClick={() => navigate(`/details`, { state: item })}>
              View More
            </CardButton>
          </FoodCard>
        );
      })}
    </StyledCard>
  );
};

export default Card;
