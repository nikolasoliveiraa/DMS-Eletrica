import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-header" 
      className="h-20 py-5" // altura e padding ajustados aqui
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-blue-800">DMS Elétrica</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-blue-800 hover:text-blue-600 font-medium">Início</a>
            <a href="#services" className="text-blue-800 hover:text-blue-600 font-medium">Serviços</a>
            <a href="#about" className="text-blue-800 hover:text-blue-600 font-medium">Sobre Nós</a>
            <a href="#projects" className="text-blue-800 hover:text-blue-600 font-medium">Projetos</a>
            <a href="#contact" className="text-blue-800 hover:text-blue-600 font-medium">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-button" 
            className="md:hidden text-blue-800"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          id="mobile-menu" 
          className={`md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-blue-800 hover:text-blue-600 font-medium py-2" onClick={closeMobileMenu}>Início</a>
            <a href="#services" className="text-blue-800 hover:text-blue-600 font-medium py-2" onClick={closeMobileMenu}>Serviços</a>
            <a href="#about" className="text-blue-800 hover:text-blue-600 font-medium py-2" onClick={closeMobileMenu}>Sobre Nós</a>
            <a href="#projects" className="text-blue-800 hover:text-blue-600 font-medium py-2" onClick={closeMobileMenu}>Projetos</a>
            <a href="#contact" className="text-blue-800 hover:text-blue-600 font-medium py-2" onClick={closeMobileMenu}>Contato</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;