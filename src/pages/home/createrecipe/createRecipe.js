import RecipePhoto from "./recipephoto";
import RecipeInfo from "./recipeinfo";
import Ingredients from "./ingredients";
import Steps from "./steps";

const CreateRecipe = () => {
  return (
    <>

    <div className="d-flex flex-column gap-4 align-items-center">
    <RecipePhoto />
      <RecipeInfo />
      <Ingredients />
      <Steps />

    </div>
     
    </>
  );
};

export default CreateRecipe;
