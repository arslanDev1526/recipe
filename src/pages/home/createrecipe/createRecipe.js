import RecipePhoto from "./recipephoto";
import RecipeInfo from "./recipeinfo";
import Ingredients from "./ingredients";
import Steps from "./steps";

const CreateRecipe = () => {
  return (
    <>
      <RecipePhoto />
      <RecipeInfo />
      <Ingredients />
      <Steps />
    </>
  );
};

export default CreateRecipe;
