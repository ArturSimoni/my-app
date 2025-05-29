// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm.js";
import AgendamentoClientes from "./components/AgendamentoClientes.js";
import AgendamentoFuncionarios from "./components/AgendamentoFuncionarios.js";
import MenuFuncionarios from "./components/MenuFuncionarios.js";
import RegistroCliente from "./components/RegistroCliente.js";
import HomePage from "./components/HomePage.js"; // Importa o novo componente HomePage

// Importar o CSS global é crucial para o layout de tela cheia
import './index.css'; // Certifique-se de que este arquivo existe e contém as regras globais

function LoginWrapper() {
  const navigate = useNavigate();

  const handleLoginSuccess = (userType) => {
    if (userType === 'cliente') {
      navigate('/agendamento-clientes');
    } else if (userType === 'funcionario') {
      navigate('/menu-funcionarios');
    } else {
      navigate('/agendamento-clientes');
    }
  };

  return <LoginForm onLoginSuccess={handleLoginSuccess} />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Define HomePage como a rota inicial */}
        <Route path="/login" element={<LoginWrapper />} /> {/* Move o Login para /login */}
        <Route path="/agendamento-clientes" element={<AgendamentoClientes />} />
        <Route path="/agendamento-funcionarios" element={<AgendamentoFuncionarios />} />
        <Route path="/menu-funcionarios" element={<MenuFuncionarios />} />
        <Route path="/registro-cliente" element={<RegistroCliente />} />
      </Routes>
    </Router>
  );
}