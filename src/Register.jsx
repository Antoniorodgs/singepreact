import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="form-container">
      <h2>Registre-se</h2>
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nome Completo</label>
      <input name="name" id="name" placeholder="Nome"/>
      <label htmlFor="email">E-mail</label>
      <input type="email" placeholder="Digite o seu e-mail" id="email" name="email"/>

      <label htmlFor="whatsapp">Whatsapp</label>
      <input name="whatsapp" placeholder="1191234-5678" id="whatsapp"/>

      <label htmlFor="establishment">Nome do estabelecimento</label>
      <input type="name" placeholder="Nome fantásia" name="establishment"/>

      <label htmlFor="password">Senha</label>
      <input type="password" placeholder="********" id="password" name="password"/>
      
      <label htmlFor="passwordConfirm">Confirme a senha</label>
      <input type="password" placeholder="********" id="password" name="passwordConfirm"/>

      <button type="submit">Conecte-se</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Já possue uma conta? Entre aqui.</button>
  </div>
  )
}