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
};

const renderRow = (props: ListChildComponentProps, handleClick: (index: number) => void, recipes: Recipe[]) => {
  const { index, style } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => handleClick(index)}>
        <ListItemText primary={recipes[index].title}
          sx={{ right: "0px", fontSize: '40px', color: 'black', textAlign: 'left' }}
        />
      </ListItemButton>
    </ListItem>
  );
};

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
      {/* Display Recipe Details on the right */}
      {selectedRecipeIndex !== null && (
        <div style={{
          marginRight: '30px',
          backgroundColor: 'white',
          border: '1px solid gray',
          borderRadius: '8px',
          padding: '20px',
          zIndex: 1000,
          width: '300px',
          height: '400px',
          position: 'relative',
          overflowY: 'auto'
        }}>
          <RecipeDetailes recipe={recipes[selectedRecipeIndex]} />
        </div>
      )}

      {/* Recipe List on the left */}
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
          {(props) => renderRow(props, handleClick, recipes)}
        </FixedSizeList>
      </Box>

      {/* Loading state */}
      {recipes.length === 0 && <p>Loading recipes...</p>}
    </Box>
  );
};

export default Recipes;
