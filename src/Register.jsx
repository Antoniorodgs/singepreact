import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [establishment, setEstablishment] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass, name, whatsapp, establishment, confirmPass);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPass(e.target.value);
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

  return (
    <div className="form-container">
      <h2>Registre-se</h2>
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
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handlePasswordChange}
        />

        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          value={confirmPass}
          type="password"
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleConfirmPasswordChange}
        />

        <button type="submit">Finalizar Cadastro</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Já possue uma conta? Entre aqui.
      </button>
    </div>
  );
};
