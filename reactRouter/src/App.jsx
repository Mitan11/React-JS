import React from 'react'
import Home  from './pages/Home'
import Contact  from './pages/Contact'
import AboutUs  from './pages/AboutUs'
import Blog  from './pages/Blog'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/AboutUs",
      element: <AboutUs />,
    },
    {
      path: "/Blog",
      element: <Blog />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
