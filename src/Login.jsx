import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePassChange = (e) => {
    setPass(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  
  return (
    <div className="form-container">
      <h2>Conecte-se</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input value={email} onChange={handleEmailChange} type="email" placeholder="Digite o seu e-mail" id="email" name="email"/>

        <label htmlFor="password">Senha</label>
        <input value={pass} onChange={handlePassChange} type="password" placeholder="********" id="password" name="password"/>

        <button type="submit">Conecte-se</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Não tem uma conta? Registre-se aqui.</button>
    </div>
  )
}
