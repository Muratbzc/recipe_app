import axios from "axios";
import { useState } from "react";
import Card from "../card/Card";
import StyledHeader, {
  BackgroundImg,
  Button,
  Form,
  Input,
  Select,
  Texth1,
} from "./Header.Styled";
import BImg from "../../assets/2.jpg";

const Header = () => {
  const [recipe, setRecipe] = useState("");
  const [quary, setQuary] = useState("");
  const [meal, setMeal] = useState("");

  const getRecipeFromApi = async () => {
    const APP_ID = "4fed4613";
    const APP_KEY = "c56550d2aec99c6b14beaf2a2e7bd1e6";
    // const url = `https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=dinner`;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${quary}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

    const res = await axios(url);
    const data = res.data.hits;
    setRecipe(data);
    console.log(recipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quary, meal);
    getRecipeFromApi();
    setQuary("");
    setMeal("");
  };
  const handleQuary = (e) => {
    setQuary(e.target.value);
  };
  const handleMeal = (e) => {
    setMeal(e.target.value);
  };

  return (
    <StyledHeader>
      <Texth1>Select The Food</Texth1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          id="query"
          placeholder="Ex. pizza, salad"
          value={quary}
          onChange={handleQuary}
        />
        <Button type="submit">Search</Button>
        <Select name="meal" id="meal" onChange={handleMeal}>
          <option disabled value="Select The Meal">
            Select The Meal
          </option>

          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </Select>
      </Form>
      {recipe.length > 0 ? (
        <Card recipe={recipe} />
      ) : (
        <BackgroundImg src={BImg} />
      )}
    </StyledHeader>
  );
};

export default Header;
