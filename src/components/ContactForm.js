import React, { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('E-mail enviado com sucesso!');
        // --- Rastreamento de conversão Google Ads ---
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17152194306/XG6cCPH5w9UaEILu5vI_', // Substitua pelo seu ID/rótulo se necessário
            // 'value': 1.0, // Opcional: valor da conversão
            // 'currency': 'BRL', // Opcional: moeda
            'event_callback': function() {
              console.log('Conversão Google Ads registrada');
            }
          });
        }
        // --------------------------------------------
      } else {
        setStatus('Falha ao enviar e-mail.');
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setStatus('Erro inesperado.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
      <p>{status}</p>
    </form>
  );
}

export default ContactForm;