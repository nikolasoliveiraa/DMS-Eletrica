import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-gray-400">Soluções completas em instalações elétricas residenciais, comerciais e industriais.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Serviços</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">Sobre Nós</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition duration-300">Projetos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Instalações Elétricas</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Energia Solar</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Projetos Elétricos</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Manutenção Elétrica</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Padrão de Entrada</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DMS Elétrica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;