import React from "react";
import "./LoginForm.css";
import logo from "../assets/sisc-vidal-logo.png"; // substitua pelo seu caminho correto

function LoginForm() {
  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="SISC Vidal Logo" className="logo" />

        <div className="login-box">
          <div className="user-icon">👤</div>

          <input type="text" placeholder="E-mail/Telefone" className="input" />
          <input type="password" placeholder="Senha" className="input" />

          <div className="options">
            <label>
              <input type="checkbox" />
              manter conectado
            </label>
            <a href="#" className="forgot">
              esqueceu sua senha?
            </a>
          </div>

          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
