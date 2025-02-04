import { Box } from "@mui/material"
import { Recipe } from "./Recipes"
const RecipeDetailes = ({ recipe }: { recipe: Recipe }) => {
    return (<>
        <Box sx={{ textAlign:"left"}}>
            <h2>Recipe details</h2> 
            <h3>id:</h3>
            <span>{recipe.id}</span>
            <h3>title:</h3>
            <span>{recipe.title}</span>
            <h3>description:</h3>
            <p>{recipe.description}</p>
            <h3>author id:</h3>
            <span>{recipe.authorId}</span>
            <h3>ingredients:</h3>
            {Array.isArray(recipe.ingredients)
                ? recipe.ingredients.map((product, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                        {product}
                    </li>
                ))
                : recipe.ingredients}
        </Box>
    </>)
}
export default RecipeDetailes
