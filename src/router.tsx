import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AppLayout from "./components/AppLayot";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";

const router = createBrowserRouter([
   {
      path: '/', element: <AppLayout />,
      errorElement: <h1> error</h1>,
      children: [
         { path: '/', element: <Home /> },
         { path: 'recipes', element: <Recipes /> },
         { path: 'addRecipe', element: <AddRecipe /> }
      ]
   }
]);

export default router;
