import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/App.scss';
import { Login } from './Login';
import { Register } from './Register';
import { ConfirmCode } from './ConfirmAccount';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import { Blank } from './pages/Blank';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authUserAccount" element={<ConfirmCode />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/vender" element={<Blank />} />
          <Route path="/dashboard/registrar" element={<Blank />} />
          <Route path="/dashboard/estoque" element={<Blank />} />
          <Route path="/dashboard/atualizar" element={<Blank />} />
          <Route path="/dashboard/deletar" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
