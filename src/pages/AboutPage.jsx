import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import './AboutPage.css'; // Подключаем файл стилей

function AboutPage() {
  // Используем эффект для добавления класса fade-in на компоненты после их монтирования
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in-visible');
      }, index * 300); // Каждому элементу добавляем задержку
    });
  }, []);

  return (
    <div className="about-page">
      {/* Заголовок */}
      <header className="about-header fade-in">
        <h1>Sobre Nosotros</h1>
        <p>
          En Malina Market, nuestro objetivo es ofrecerte una experiencia de compra única, 
          rápida y conveniente. Con nosotros, encuentras lo que necesitas, cuando lo necesitas.
        </p>
      </header>

      {/* Описание */}
      <section className="about-section fade-in">
        <h2>¿Por qué elegirnos?</h2>
        <div className="features">
          <div className="feature-item fade-in">
            <h3>Compra conveniente</h3>
            <p>
              Compra cómodamente desde tu hogar y recibe tus productos sin complicaciones.
            </p>
          </div>
          <div className="feature-item fade-in">
            <h3>Entrega al día siguiente</h3>
            <p>
              Recibe tus productos rápidamente en el punto de recogida más cercano, al día siguiente.
            </p>
          </div>
        </div>
      </section>

      {/* Визуальный блок с изображением */}
      <section className="about-image fade-in">
        <h2>Una experiencia sin igual</h2>
        <p>
          Disfruta de un servicio rápido y eficiente con Malina Market, donde tu satisfacción es lo más importante.
        </p>
        <img src={logo} alt="Malina Market" />
      </section>

      {/* Пункт выдачи */}
      <section className="pickup-point fade-in">
        <h2>Recoge en el punto de entrega</h2>
        <p>
          Olvídate de esperar en casa. Recoge tus productos al día siguiente en el punto de entrega más cercano.
        </p>
      </section>

      {/* Заключение */}
      <section className="about-footer fade-in">
        <p>Gracias por ser parte de nuestra comunidad.</p>
      </section>

      {/* Футер */}
      <div style={{
        width: 'auto',
        padding: '1rem 0',
        marginTop: '3rem',
        marginLeft: '-30rem',
        color: 'black',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: '400',
      }}>
        <span style={{ marginLeft: '29rem', display: 'inline-block', whiteSpace: 'nowrap' }}>
          © {new Date().getFullYear()} Malina Market. Todos los derechos reservados.
        </span>
      </div>
    </div>
  );
}

export default AboutPage;
