import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from './redux/recipeSlice';
import { AddDispatch, RootState } from './redux/store';
import RecipeDetailes from './RecipeDetailes';
export type Recipe = {
  id: string,
  title: string,
  description: string,
  ingredients: string[],
  authorId: string
}
<<<<<<< HEAD
const renderRow = (props: ListChildComponentProps, handleClick: (index: number) => void) => {
=======
const renderRow = (props: ListChildComponentProps, handleClick: (index: number) => void, recipes: Recipe[]) => {
>>>>>>> 28e6f6ec79d9a1f21e1648c55f8236295201e0c6
  const { index, style, data } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => handleClick(index)}>
        <ListItemText primary={data[index].title}
          sx={{ right: "0px", fontSize: '40px', color: 'black', textAlign: 'left' }}
        />
      </ListItemButton>
    </ListItem>
  );
}
const Recipes = () => {
  const dispatch = useDispatch<AddDispatch>();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setSelectedRecipeIndex(selectedRecipeIndex === index ? null : index);
  };
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
<<<<<<< HEAD
      {selectedRecipeIndex !== null && (
        <div style={{
          marginRight: '30px', 
=======
      {/* קומפוננטת פירוט המתכון ממוקמת כאן */}
      {selectedRecipeIndex !== null && (
        <div style={{
          marginRight: '30px', // רווח נוסף בין הרשימה לפירוט
>>>>>>> 28e6f6ec79d9a1f21e1648c55f8236295201e0c6
          backgroundColor: 'white',
          border: '1px solid gray',
          borderRadius: '8px',
          padding: '20px',
          zIndex: 1000,
<<<<<<< HEAD
          width: '300px', 
          height: '400px', 
=======
          width: '300px', // רוחב הקומפוננטה לפי הצורך
          height: '400px', // גובה הקומפוננטה לפי הצורך
>>>>>>> 28e6f6ec79d9a1f21e1648c55f8236295201e0c6
          position: 'relative',
          overflowY: 'auto'
        }}>
          <RecipeDetailes recipe={recipes[selectedRecipeIndex]} />
        </div>
      )}
      <Box
        sx={{
          width: '360px',
          height: '400px',
          bgcolor: 'background.paper',
          border: '1px solid gray',
          borderRadius: '8px',
          padding: '10px',
          position: 'relative',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <h1>Recipes list</h1>
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={recipes.length}
          overscanCount={5}
          itemData={recipes}
        >
<<<<<<< HEAD
          {(props) => renderRow(props, handleClick)}
=======
          {(props) => renderRow(props, handleClick, recipes)}
>>>>>>> 28e6f6ec79d9a1f21e1648c55f8236295201e0c6
        </FixedSizeList>
      </Box>
      {recipes.length === 0 && <p>Loading recipes...</p>}
    </Box>
  );
}
export default Recipes;