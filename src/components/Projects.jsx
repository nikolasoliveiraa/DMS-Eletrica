import React from 'react';

const projects = [
  {
    image: "assets/img/Comercial.jpg",
    title: "Instalação Comercial",
    description: "Lojas e Comercio"
  },
  {
    image: "assets/img/Painel.jpg",
    title: "Automação Elétrica",
    description: "Paineis Elétricos"
  },
  {
    image: "assets/img/Residencial.jpg",
    title: "Instalação e manutenção Elétrica",
    description: "Residencial, Comercial e Industrial"
  },
   {
    image: "assets/img/Chiler.jpg", 
    title: "Instalação de Chiller",
    description: "Sistemas de Refrigeração"
  },
  {
    image: "assets/img/Ar-condicionado.jpg",
    title: "Instalação de Ar Condicionado",
    description: "Sistemas de Climatização Residencial e Comercial"
  },
  {
    image: "assets/img/Montagem-Industriais.jpg",
    title: "Montagem Industrial",
    description: "Montagem de Painéis e Infraestrutura Elétrica"
  }

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Nossos Projetos</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Confira alguns dos nossos trabalhos realizados com excelência e profissionalismo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;