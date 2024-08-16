import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/index';
import Login from './pages/login';
import Layout from './pages/layout';
import Form from './pages/form';

import './reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import My from './pages/my';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/form" element={<Form />} />
            <Route path="/my" element={<My />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
