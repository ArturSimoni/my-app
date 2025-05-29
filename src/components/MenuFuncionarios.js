import React from 'react';
import './MenuFuncionarios.css'; // Importa o CSS específico
import { FaBell, FaUserCircle, FaChevronDown, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaClipboardList } from 'react-icons/fa'; // Ícones necessários

export default function MenuFuncionarios() {
  // Dados simulados para os atendimentos e estatísticas
  const atendimentos = [
    { horario: '08:00', profissional: 'Dr. Silva', tipo: 'Consulta' },
    { horario: '09:30', profissional: 'Dra. Souza', tipo: 'Exame' },
    { horario: '11:00', profissional: 'Dr. Santos', tipo: 'Tratamento' },
    { horario: '14:00', profissional: 'Dra. Costa', tipo: 'Consulta' },
  ];

  const estatisticasConsultas = {
    agendadas: 5,
    confirmadas: 4,
    realizadas: 3,
    canceladas: 1,
  };

  const estatisticasExames = {
    agendados: 3,
    confirmados: 2,
    realizados: 1,
    cancelados: 0,
  };

  return (
    <div className="menu-funcionarios-container">
      {/* Cabeçalho Superior */}
      <header className="menu-funcionarios-header">
        <div className="menu-funcionarios-logo-section">
          <img src="/sisc-vidal-logo.png" alt="SISC Vidal Logo" className="menu-funcionarios-logo" />
        </div>
        <nav className="menu-funcionarios-nav">
          <button className="menu-funcionarios-nav-btn active">Painel</button>
          <button className="menu-funcionarios-nav-btn">Agendamento</button>
          <button className="menu-funcionarios-nav-btn">Seus Exames</button>
        </nav>
        <div className="menu-funcionarios-icons">
          <FaBell className="menu-funcionarios-icon" />
          <FaUserCircle className="menu-funcionarios-icon" />
          <FaChevronDown className="menu-funcionarios-icon" />
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="menu-funcionarios-main-content">
        {/* Painel Esquerdo: Seus Atendimentos */}
        <div className="menu-funcionarios-left-panel">
          <h2>Seus Atendimentos</h2>
          <div className="menu-funcionarios-atendimentos-list">
            {atendimentos.map((atendimento, index) => (
              <div key={index} className="menu-funcionarios-atendimento-card">
                <div className="menu-funcionarios-atendimento-details">
                  <div className="menu-funcionarios-detail-item">
                    <span className="menu-funcionarios-detail-label">Horário</span>
                    <span className="menu-funcionarios-detail-value">{atendimento.horario}</span>
                  </div>
                  <div className="menu-funcionarios-detail-item">
                    <span className="menu-funcionarios-detail-label">Profissional</span>
                    <span className="menu-funcionarios-detail-value">{atendimento.profissional}</span>
                  </div>
                  <div className="menu-funcionarios-detail-item">
                    <span className="menu-funcionarios-detail-label">Seu nome</span> {/* Assumindo que este é o nome do funcionário */}
                    <span className="menu-funcionarios-detail-value">Funcionário X</span>
                  </div>
                  <div className="menu-funcionarios-detail-item">
                    <span className="menu-funcionarios-detail-label">Tipo</span>
                    <span className="menu-funcionarios-detail-value">{atendimento.tipo}</span>
                  </div>
                </div>
                <FaCheckCircle className="menu-funcionarios-check-icon" />
              </div>
            ))}
          </div>
        </div>

        {/* Painel Direito: Estatísticas */}
        <div className="menu-funcionarios-right-panel">
          <div className="menu-funcionarios-periodo-selector">
            <span>Período</span>
            <select>
              <option>Últimos 30 dias</option>
              {/* Opções de período */}
            </select>
          </div>

          {/* Estatísticas de Consultas */}
          <div className="menu-funcionarios-stats-grid">
            <div className="menu-funcionarios-stat-item">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Consultas Agendadas</span>
              <FaCalendarAlt className="menu-funcionarios-stat-icon" />
            </div>
            <div className="menu-funcionarios-stat-item green-check">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Consultas Confirmadas</span>
              <FaCheckCircle className="menu-funcionarios-stat-icon" />
            </div>
            <div className="menu-funcionarios-stat-item green-check">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Consultas Realizadas</span>
              <FaCheckCircle className="menu-funcionarios-stat-icon" />
            </div>
            <div className="menu-funcionarios-stat-item red-x">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Consultas Canceladas</span>
              <FaTimesCircle className="menu-funcionarios-stat-icon" />
            </div>
          </div>
          <h3 className="menu-funcionarios-section-title">Consultas Concluídas</h3> {/* Título adicionado para clareza */}

          {/* Estatísticas de Exames */}
          <div className="menu-funcionarios-stats-grid">
            <div className="menu-funcionarios-stat-item">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Exames Agendados</span>
              <FaCalendarAlt className="menu-funcionarios-stat-icon" />
            </div>
            <div className="menu-funcionarios-stat-item green-check">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Exames Confirmados</span>
              <FaCheckCircle className="menu-funcionarios-stat-icon" />
            </div>
            <div className="menu-funcionarios-stat-item green-check">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Exames Realizados</span>
              <FaCheckCircle className="menu-funcionarios-stat-icon" />
            </div>
            <div className="menu-funcionarios-stat-item red-x">
              <span className="menu-funcionarios-stat-value">X</span>
              <span className="menu-funcionarios-stat-label">Exames Cancelados</span>
              <FaTimesCircle className="menu-funcionarios-stat-icon" />
            </div>
          </div>
          <h3 className="menu-funcionarios-section-title">Exames Concluídos</h3> {/* Título adicionado para clareza */}
        </div>
      </main>
    </div>
  );
}