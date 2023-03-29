import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const objJson = {user, password};
    console.log(objJson);
    
    try {
      const resp = await axios.post('http://localhost:3033/signin', objJson, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(resp.data);
      alert(resp.data.body);
    } catch(error) {
      alert(error.request.response);
      console.log(error.request.response);

      console.log(error.request.status);
    }
    
  }
  
  return (
    <div className="form-container">
      <h2>Conecte-se</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Usuário</label>
        <input value={user} onChange={handleUserChange} placeholder="Digite o seu usuário" id="user" name="user"/>

        <label htmlFor="password">Senha</label>
        <input value={password} onChange={handlePassChange} type="password" placeholder="********" id="password" name="password"/><br></br>

        <button type="submit">Conecte-se</button>

      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Não tem uma conta? Registre-se aqui.</button>
    </div>
  )
}
