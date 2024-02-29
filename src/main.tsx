import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './scss/main.scss';

import Home from './routes/Home.tsx';
import Header from './components/header.tsx';

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
