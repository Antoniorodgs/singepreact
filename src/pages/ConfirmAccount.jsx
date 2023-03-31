import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const ConfirmCode = (props) => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    // navigate("/dashboard");
  }

  const handleCode = (e) => {
    setCode(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = "11959050868";
    
    const objJson = {user, code}

    const resp = await axios.post('http://localhost:3033/authUserAccount', objJson, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    alert(resp.data);

    if (resp.data === "Conta autenticada com sucesso!"){
      navigate("/dashboard");
    }


    

    
    
  }
  
  return (
    <div className="App">
    <div className="form-container">
      <h2>Autenticar</h2><br></br>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Código</label>
        <input value={code} onChange={handleCode} placeholder="Digite o código enviado no seu whatsapp" id="code" name="code"/><br></br>

        <button type="submit">ENVIAR</button>

      </form><br></br>
      <button className="link-btn" onClick={handleOnClick}>REENVIAR CÓDIGO.</button>
    </div>
    </div>
  )
}