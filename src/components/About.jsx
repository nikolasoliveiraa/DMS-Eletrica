import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Equipe DMS Elétrica" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Sobre a DMS Elétrica</h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 mb-4">A DMS Elétrica é uma empresa especializada em instalações elétricas residenciais, comerciais e industriais, comprometida com a excelência e segurança em todos os serviços prestados.</p>
            <p className="text-gray-600 mb-6">Nossa equipe é formada por profissionais qualificados e experientes, que utilizam as melhores técnicas e materiais do mercado para garantir a satisfação total de nossos clientes.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-yellow-500 mr-3 mt-1">
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Qualidade Garantida</h4>
                  <p className="text-gray-600">Utilizamos apenas materiais de primeira linha e mão de obra especializada.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-yellow-500 mr-3 mt-1">
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Cada cliente recebe um atendimento exclusivo e soluções sob medida.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-yellow-500 mr-3 mt-1">
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Compromisso com Prazos</h4>
                  <p className="text-gray-600">Cumprimos rigorosamente os prazos estabelecidos em nossos contratos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;