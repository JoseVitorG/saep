import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './telas/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);