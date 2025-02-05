<<<<<<< HEAD
import {  createBrowserRouter } from "react-router";
=======
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router";
>>>>>>> 28e6f6ec79d9a1f21e1648c55f8236295201e0c6
import Home from "./components/Home";
import AppLayout from "./components/AppLayot";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe"
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
])
export default router