import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/index';
import Form from './pages/form/index';
import './reset.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/form',
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
