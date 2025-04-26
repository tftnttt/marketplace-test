import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // добавил статус отправки

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Mensaje enviado con éxito.');
        setFormData({ name: '', email: '', message: '' }); // очистка формы
      } else {
        setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Error del servidor. Inténtalo más tarde.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FAFAFA', // исправил цвет (у тебя стояло '#white', такого цвета нет)
      paddingLeft: '60px',
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333333', marginBottom: '1rem' }}>
        Contacto
      </h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%', backgroundColor: '#FFF', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #ccc', height: '150px' }}
            required
          />
        </div>

        <button type="submit" style={{
          padding: '0.8rem 1.2rem',
          backgroundColor: '#FF6B81',
          color: '#FFF',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.3s',
        }}>
          Enviar
        </button>

        {status && (
          <p style={{ marginTop: '1rem', color: status.includes('éxito') ? 'green' : 'red' }}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactPage;
