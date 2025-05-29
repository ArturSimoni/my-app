import React from 'react';
import './AgendamentoFuncionarios.css'; // Importa o CSS específico desta página
import { FaUser } from 'react-icons/fa'; // Para o ícone de usuário

export default function AgendamentoFuncionarios() {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  // Dados do calendário para replicar a imagem
  const dates = [
    { day: '28', currentMonth: false }, { day: '29', currentMonth: false }, { day: '30', currentMonth: false }, { day: '31', currentMonth: false },
    { day: '1', currentMonth: true }, { day: '2', currentMonth: true }, { day: '3', currentMonth: true },
    { day: '4', currentMonth: true }, { day: '5', currentMonth: true }, { day: '6', currentMonth: true }, { day: '7', currentMonth: true }, { day: '8', currentMonth: true }, { day: '9', currentMonth: true }, { day: '10', currentMonth: true },
    { day: '11', currentMonth: true }, { day: '12', currentMonth: true }, { day: '13', currentMonth: true }, { day: '14', currentMonth: true }, { day: '15', currentMonth: true }, { day: '16', currentMonth: true }, { day: '17', currentMonth: true },
    { day: '18', currentMonth: true }, { day: '19', currentMonth: true }, { day: '20', currentMonth: true }, { day: '21', currentMonth: true }, { day: '22', currentMonth: true }, { day: '23', currentMonth: true }, { day: '24', currentMonth: true },
    { day: '25', currentMonth: true }, { day: '26', currentMonth: true }, { day: '27', currentMonth: true }, { day: '28', currentMonth: true }, { day: '29', currentMonth: true }, { day: '30', currentMonth: true }, { day: '31', currentMonth: true },
    { day: '1', currentMonth: false }, { day: '2', currentMonth: false }, { day: '3', currentMonth: false }, { day: '4', currentMonth: false }, { day: '5', currentMonth: false }, { day: '6', currentMonth: false }, { day: '7', currentMonth: false },
  ];

  return (
    <div className="funcionarios-page-container">
      {/* Cabeçalho superior da página */}
      <div className="funcionarios-header">
      </div>
      
      {/* Conteúdo principal com painéis esquerdo e direito */}
      <div className="funcionarios-main-content">
        {/* Painel Esquerdo: Formulário de Seleção */}
        <div className="funcionarios-left-panel">
          <div className="funcionarios-form-group">
            <label>Escolha o tipo de agendamento</label>
            <select className="funcionarios-select">
              <option>Selecionar</option>
              {/* Adicione outras opções aqui */}
            </select>
          </div>
          <div className="funcionarios-form-group">
            <label>Escolha o Paciente</label>
            <select className="funcionarios-select">
              <option>Selecionar</option>
              {/* Adicione outras opções aqui */}
            </select>
          </div>
          <div className="funcionarios-form-group">
            <label>Selecione um Médico</label>
            <select className="funcionarios-select">
              <option>Selecionar</option>
              {/* Adicione outras opções aqui */}
            </select>
          </div>
          <div className="funcionarios-form-group">
            <label>Selecione um Horário</label>
            <select className="funcionarios-select">
              <option>Selecionar</option>
              {/* Adicione outras opções aqui */}
            </select>
          </div>
          
          {/* Grupo de Checkboxes */}
          <div className="funcionarios-checkbox-group">
            <label className="funcionarios-checkbox-label">
              <input type="checkbox" />
              Criar Cadastro
            </label>
            <label className="funcionarios-checkbox-label">
              <input type="checkbox" />
              Utilizar cadastro existente
            </label>
            <label className="funcionarios-checkbox-label">
              <input type="checkbox" />
              Disponibilizar Exames
            </label>
          </div>
        </div>
        
        {/* Painel Direito: Calendário e Ícone de Usuário */}
        <div className="funcionarios-right-panel">
          <div className="funcionarios-user-icon-container">
            <FaUser className="funcionarios-user-icon" />
          </div>
          <p className="funcionarios-select-date-text">Selecione uma data</p>
          
          {/* Navegação do Calendário */}
          <div className="funcionarios-calendar-header">
            <span className="funcionarios-arrow">&lt;</span>
            <span className="funcionarios-month">Maio</span>
            <span className="funcionarios-arrow">&gt;</span>
          </div>
          
          {/* Grid do Calendário */}
          <div className="funcionarios-calendar-grid">
            {daysOfWeek.map(day => (
              <div key={day} className="funcionarios-day-of-week">{day}</div>
            ))}
            {dates.map((date, index) => (
              <div key={index} className={`funcionarios-calendar-day ${date.currentMonth ? '' : 'funcionarios-other-month'}`}>
                {date.day}
              </div>
            ))}
          </div>
          
          {/* Logo SISC VIDAL no rodapé do painel direito */}
          <div className="funcionarios-sisc-logo">
            <img src="/sisc-vidal-logo.png" alt="SISC VIDAL Logo" /> {/* Ajuste o caminho se seu logo não estiver na pasta public/ */}
          </div>
        </div>
      </div>
    </div>
  );
}