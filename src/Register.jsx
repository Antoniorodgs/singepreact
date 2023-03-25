import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="form-container">
      <h2>Registre-se</h2>
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nome Completo</label>
      <input value={name} name="name" id="name" placeholder="Nome"/>
      <label htmlFor="email">E-mail</label>
      <input value={email} type="email" placeholder="Digite o seu e-mail" id="email" name="email"/>

      <label htmlFor="password">Senha</label>
      <input value={pass} type="password" placeholder="********" id="password" name="password"/>

      <button type="submit">Conecte-se</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Já possue uma conta? Entre aqui.</button>
  </div>
  )
}