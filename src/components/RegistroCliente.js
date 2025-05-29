import React from 'react';
import './RegistroCliente.css'; // Importa o CSS específico
import logo from '../assets/sisc-vidal-logo.png'; // Caminho para o logo SISC VIDAL

export default function RegistroCliente() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar o cliente
    console.log("Formulário de registro submetido!");
    // Aqui você adicionaria a integração com um backend ou Firebase para salvar os dados
    alert("Registro simulado com sucesso!"); // Usando alert para simulação, substituir por modal real
  };

  return (
    <div className="registro-cliente-page">
      <div className="registro-cliente-container">
        {/* Logo SISC Vidal */}
        <img src={logo} alt="SISC Vidal Logo" className="registro-cliente-logo" />

        <form onSubmit={handleSubmit} className="registro-cliente-form">
          {/* Campos de Input */}
          <div className="form-row">
            <input type="text" placeholder="Nome" className="registro-cliente-input" />
            <input type="text" placeholder="Sobrenome" className="registro-cliente-input" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="E-mail" className="registro-cliente-input" />
            <input type="text" placeholder="Data de Nascimento" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} className="registro-cliente-input" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Confirmar E-mail" className="registro-cliente-input" />
            <input type="tel" placeholder="Celular" className="registro-cliente-input" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Logradouro" className="registro-cliente-input" />
            <input type="text" placeholder="Bairro" className="registro-cliente-input" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Número" className="registro-cliente-input short-input" />
            <input type="text" placeholder="Ponto de Referência" className="registro-cliente-input long-input" />
          </div>

          {/* Checkboxes */}
          <div className="registro-cliente-checkbox-group">
            <label className="registro-cliente-checkbox-label">
              <input type="checkbox" />
              Aceito os termos e condições
            </label>
            <label className="registro-cliente-checkbox-label">
              <input type="checkbox" />
              Receber Notificações por E-mail
            </label>
            <label className="registro-cliente-checkbox-label">
              <input type="checkbox" />
              Receber Comunicações por Whatsapp
            </label>
          </div>

          {/* Botão de Registro */}
          <button type="submit" className="registro-cliente-button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}