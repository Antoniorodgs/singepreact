import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { images } from '../../constants';

export const Login = (props) => {
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  }

  const handleOnClick = (e) => {
    navigate("/register");
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
      alert(resp.data.body);
      if(resp.status === 200) navigate("/dashboard");

    } catch(error) {

      let data = JSON.parse(error.request.response);
      alert(data.body);

    }
    
  }
  
  return (
    <div>
    <header className="header-home">
        <div className="headerhome containerhome">
          <a href="#">
            <img className="imglogo" src={images.singepLogo} alt="Singep" />
          </a>
        </div>
    </header>
    <div className="App">
    <div className="form-container">
      <h2>Conecte-se</h2>
      <div className="">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Usuário</label>
        <input value={user} onChange={handleUserChange} placeholder="Digite o seu usuário" id="user" name="user"/>

        <label htmlFor="password">Senha</label>
        <input value={password} onChange={handlePassChange} type="password" placeholder="********" id="password" name="password"/><br></br>

        <button type="submit">Conecte-se</button>

      </form><br></br>
      </div>
      <button className="link-btn" onClick={handleOnClick}>Não tem uma conta? Registre-se aqui.</button>
    </div>
    </div>
    </div>
  )
}
