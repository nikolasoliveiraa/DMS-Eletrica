import React from 'react';
import { FaBolt, FaSolarPanel, FaLightbulb, FaPlug, FaHome, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaBolt className="text-4xl" />,
    title: "Instalações Elétricas",
    description: "Instalações elétricas residenciais, comerciais e industriais com segurança e qualidade."
  },
  {
    icon: <FaSolarPanel className="text-4xl" />,
    title: "Energia Solar",
    description: "Sistemas de energia solar fotovoltaica para redução de custos com energia elétrica."
  },
  {
    icon: <FaLightbulb className="text-4xl" />,
    title: "Projetos Elétricos",
    description: "Elaboração de projetos elétricos conforme normas técnicas e legislação vigente."
  },
  {
    icon: <FaPlug className="text-4xl" />,
    title: "Manutenção Elétrica",
    description: "Manutenção preventiva e corretiva em instalações elétricas de qualquer porte."
  },
  {
    icon: <FaHome className="text-4xl" />,
    title: "Padrão de Entrada",
    description: "Regularização e instalação de padrão de entrada junto à concessionária de energia."
  },
  {
    icon: <FaTools className="text-4xl" />,
    title: "Automação Residencial",
    description: "Soluções em automação para maior conforto, segurança e economia de energia."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Oferecemos soluções completas em instalações elétricas para diversos segmentos, sempre com qualidade e segurança.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-blue-800 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;