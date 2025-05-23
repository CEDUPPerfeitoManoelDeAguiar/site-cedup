import React, { useState, useEffect } from 'react';
import './style.css';

const Administracao = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date(2025, 12, 31, 0, 0).getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>Em Breve</h1>
        <p>Estamos trabalhando em algo incrível!</p>
        <div className="countdown">
          <div className="countdown-item">
            <span id="days">{String(timeLeft.days).padStart(2, '0')}</span>
            <span>Dias</span>
          </div>
          <div className="countdown-item">
            <span id="hours">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span>Horas</span>
          </div>
          <div className="countdown-item">
            <span id="minutes">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span>Minutos</span>
          </div>
          <div className="countdown-item">
            <span id="seconds">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span>Segundos</span>
          </div>
        </div>
        <p>Fique Ligado para Atualizações!</p>
      </div>
    </div>
  );
};

export default Administracao;