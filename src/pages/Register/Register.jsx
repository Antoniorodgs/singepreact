import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import {useNavigate} from "react-router-dom";
import { images } from '../../constants';

export const Register = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [establishment, setEstablishment] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => { 

    e.preventDefault();
    console.log(
      email,
      password,
      name,
      whatsapp,
      establishment,
      confirmPassword,
    );
   
    let objJson = {
      name,
      email,
      whatsapp,
      ownerof: establishment,
      password,
      confirmPassword,
    };

    try {
      const resp = await axios.post('http://localhost:3033/signup', objJson, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      alert(resp.data);
      navigate("/authUserAccount");

    } catch(error) {
      alert(error.request.response);
      console.log(error.request.response);

      console.log(error.request.status);
    }



  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWhatsappChange = (e) => {
    setWhatsapp(e.target.value);
  };

  const handleEstablishmentChange = (e) => {
    setEstablishment(e.target.value);
  };

  const handleOnClick = (e) => {
    navigate("/login");
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
      <br />
    <div className="App">
    <div className="form-container">
      <h2>Registre-se</h2><br/>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome Completo</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Nome"
          onChange={handleNameChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          type="email"
          placeholder="Digite o seu e-mail"
          id="email"
          name="email"
          onChange={handleEmailChange}
        />

        <label htmlFor="whatsapp">Whatsapp</label>
        <input
          value={whatsapp}
          name="whatsapp"
          placeholder="1191234-5678"
          id="whatsapp"
          onChange={handleWhatsappChange}
        />

        <label htmlFor="establishment">Nome do estabelecimento</label>
        <input
          value={establishment}
          type="name"
          placeholder="Nome fantasia"
          name="establishment"
          onChange={handleEstablishmentChange}
        />

        <label htmlFor="password">Senha</label>
        <input
          value={password}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handlePasswordChange}
        />

        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          value={confirmPassword}
          type="password"
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleConfirmPasswordChange}
        /><br></br>

        <button type="submit">Finalizar Cadastro</button>
      </form><br></br>
      <button className="link-btn" onClick={handleOnClick}>
        Já possue uma conta? Entre aqui.
      </button>
    </div>
    </div>
    </div>
  );
};
