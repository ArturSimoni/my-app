// src/components/LoginForm.js
import React from "react";
import "./LoginForm.css"; // Importa o CSS específico para este componente
import { FaUser } from 'react-icons/fa'; // Importa o ícone de usuário do react-icons
import logo from "../assets/sisc-vidal-logo.png"; // Caminho para o logo SISC VIDAL

function LoginForm({ onLoginSuccess }) {
  const handleLogin = (e) => {
    e.preventDefault();
    // Simula um login bem-sucedido e redireciona para a tela de clientes por padrão.
    // Você pode alterar 'cliente' para 'funcionario' aqui para testar o redirecionamento.
    const userType = 'cliente'; // Ou 'funcionario' para testar a outra rota
    onLoginSuccess(userType);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo SISC Vidal */}
        <img src={logo} alt="SISC Vidal Logo" className="logo" />

        <div className="login-box">
          {/* Ícone de Usuário */}
          <div className="user-icon">
            <FaUser />
          </div>

          {/* Campos de Input - Agora são apenas visuais, não usados para autenticação */}
          <input type="text" placeholder="E-mail/Telefone" className="input" />
          <input type="password" placeholder="Senha" className="input" />

          {/* Opções (manter conectado, esqueceu sua senha) - Apenas visuais */}
          <div className="options">
            <label className="checkbox-label">
              <input type="checkbox" />
              manter conectado
            </label>
            <a href="#" className="forgot">
              esqueceu sua senha?
            </a>
          </div>

          {/* Botão de Login */}
          <button className="login-button" onClick={handleLogin}>
            Login (Simulado)
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;