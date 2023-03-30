import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { ConfirmCode } from "./ConfirmAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState ('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/authUserAccount" element={<ConfirmCode />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;