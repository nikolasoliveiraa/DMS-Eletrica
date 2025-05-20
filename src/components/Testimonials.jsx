import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    rating: 5,
    text: "Excelente serviço! Fizeram toda a parte elétrica do meu Comercio com muita competência e dentro do prazo.",
    name: "Carlos Silva",
    role: "Proprietário de Ótica"
  },
  {
    rating: 5,
    text: "Trabalho sempre com a DMS Elétrica em meus projetos. Profissionais qualificados e atendimento impecável.",
    name: "Ana Paula",
    role: "Arquiteta"
  },
  {
    rating: 4,
    text: "Fizeram a Automação das minha maquinas industriais, Trabalho de excelência e qualidade.",
    name: "Roberto Almeida",
    role: "Empresário"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto">Veja o que nossos clientes dizem sobre nossos serviços.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <FaUser />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;