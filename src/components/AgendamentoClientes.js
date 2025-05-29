import React from 'react';
import './AgendamentoClientes.css';
import { FaUser } from 'react-icons/fa'; // Using react-icons for the user icon

export default function AgendamentoClientes() {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const dates = [
    { day: '28', currentMonth: false }, { day: '29', currentMonth: false }, { day: '30', currentMonth: false }, { day: '31', currentMonth: false }, // Previous month
    { day: '1', currentMonth: true }, { day: '2', currentMonth: true }, { day: '3', currentMonth: true }, { day: '4', currentMonth: true }, { day: '5', currentMonth: true }, { day: '6', currentMonth: true }, { day: '7', currentMonth: true },
    { day: '8', currentMonth: true }, { day: '9', currentMonth: true }, { day: '10', currentMonth: true }, { day: '11', currentMonth: true }, { day: '12', currentMonth: true }, { day: '13', currentMonth: true }, { day: '14', currentMonth: true },
    { day: '15', currentMonth: true }, { day: '16', currentMonth: true }, { day: '17', currentMonth: true }, { day: '18', currentMonth: true }, { day: '19', currentMonth: true }, { day: '20', currentMonth: true }, { day: '21', currentMonth: true },
    { day: '22', currentMonth: true }, { day: '23', currentMonth: true }, { day: '24', currentMonth: true }, { day: '25', currentMonth: true }, { day: '26', currentMonth: true }, { day: '27', currentMonth: true }, { day: '28', currentMonth: true },
    { day: '29', currentMonth: true }, { day: '30', currentMonth: true }, { day: '31', currentMonth: true }, // Current month
    { day: '1', currentMonth: false }, { day: '2', currentMonth: false }, { day: '3', currentMonth: false }, { day: '4', currentMonth: false }, { day: '5', currentMonth: false }, { day: '6', currentMonth: false }, { day: '7', currentMonth: false }, // Next month
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
  ];

  return (
    <div className="container">
      {/* Lado Esquerdo */}
      <div className="left-panel">
        <div>
          <div className="profile-section">
            <div className="profile-icon">
              <FaUser /> {/* Using react-icons FaUser */}
            </div>
            <h2>Solicitar uma consulta</h2>
          </div>

          <div className="calendar-section">
            <h3 className="calendar-month-nav">&lt; Maio &gt;</h3>
            <div className="calendar">
              {daysOfWeek.map((dia) => (
                <div key={dia} className="calendar-header">{dia}</div>
              ))}
              {dates.map((date, i) => (
                <div key={i} className={`calendar-day ${date.currentMonth ? '' : 'other-month-day'}`}>
                  {date.day}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-panel">
          <span className="footer-text">imag...</span> {/* This text seems out of place, I'll keep it as is */}
          <img src="/sisc-vidal-logo.png" alt="SISC VIDAL" className="logo" /> {/* Assuming this path is correct or replace with a placeholder */}
        </div>
      </div>

      {/* Lado Direito */}
      <div className="right-panel">
        <div className="section">
          <h3>Qual serviço será solicitado?</h3>
          <div className="button-group">
            {['Consulta', 'Exames', 'Tratamento'].map((tipo) => (
              <button key={tipo} className="btn">
                {tipo}
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Escolha um Profissional</h3>
          <select className="select">
            <option>Selecionar</option>
            {/* Add more professional options here if needed */}
          </select>
        </div>

        <div className="section">
          <h3>Escolha o Melhor Horário</h3>
          <div className="button-grid">
            {timeSlots.map((time) => (
              <button key={time} className="btn">
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}