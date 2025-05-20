import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative" 
      style={{ 
        background: 'linear-gradient(to right, #1e3a8aCC, #1e40afCC), url("assets/img/home-img.jpg") center center/cover no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Soluções em Instalações Elétricas</h1>
            <p className="text-xl mb-8">Profissionais qualificados para atender residências, comércios e indústrias com excelência e segurança.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                Solicitar Orçamento
              </a>
              <a href="#services" className="bg-transparent hover:bg-blue-800 text-white font-bold py-3 px-6 border border-white rounded-lg transition duration-300 text-center">
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;