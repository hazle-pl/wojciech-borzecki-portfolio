import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './scss/main.scss';

import Home from './routes/Home.tsx';
import Footer from './components/footer.tsx';
import Header from './components/header.tsx';
import Error404 from './routes/Error404.tsx';

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "*", element: <Error404/>}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>,
)
