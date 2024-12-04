import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainContainer from './components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainContainer/>,
      children:[{
        path:"/about",
        element:<About/>

      },]
    },
 
  ]);
  

  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App
