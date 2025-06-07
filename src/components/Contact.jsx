import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r1ecxbq', 'template_14upepd', form.current, '68WIh7pnLrim9NRbs')
      .then(() => {
        alert('Pedido enviado com sucesso!');
        form.current.reset();
      }, () => {
        alert('Erro ao enviar pedido.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Estamos prontos para atender suas necessidades. Preencha o formulário ou entre em contato por nossos canais.</p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                <textarea name="message" id="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-yellow-500 mr-4 mt-1">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">+55 11 98307-3229</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-yellow-500 mr-4 mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">marquesdouglas833@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-yellow-500 mr-4 mt-1">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00<br />Sábado: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;