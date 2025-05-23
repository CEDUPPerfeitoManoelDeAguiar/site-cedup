import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';

const AreaDoAluno = () => {
  const studentResources = [
    {
      id: 1,
      title: "Horário de aulas",
      image: "/imagens/Area-do-aluno/horário.png",
      link: "/horario-aulas",
      alt: "Horário de aulas"
    },
    {
      id: 2,
      title: "Cardápio",
      image: "/imagens/Area-do-aluno/cardapio.png",
      link: "/cardapio",
      alt: "Cardápio escolar"
    },
    {
      id: 3,
      title: "Estudante Online",
      image: "/imagens/Area-do-aluno/estudante on-line.png",
      link: "https://estudanteonline.sed.sc.gov.br/loginweb.aspx",
      alt: "Estudante Online do Estado de Santa Catarina"
    },
    {
      id: 4,
      title: "Google Classroom",
      image: "/imagens/Area-do-aluno/google classroom.png",
      link: "https://accounts.google.com/v3/signin/confirmidentifier?continue=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&ifkv=ARZ0qKL6D7tQPX77rBYfGZq87vcehFEHWD2IANhYKeylBPYs0b9sAlLySHzByPMYQlBJ_PKeJkTr&passive=1209600&service=classroom&dsh=S134374580%3A1711067969237389&theme=mn&ddm=0",
      alt: "Google Classroom"
    }
  ];

  return (
    <main className="site">
      <div className="site-content">
        <section className="cursos" id="area-aluno" aria-labelledby="area-aluno-heading">
          <h2 className="cursos-titulo" id="area-aluno-heading">ÁREA DO ALUNO</h2>
          <div className="interface">
            <div className="cursos-container">
              {studentResources.map((resource) => (
                <Link 
                  to={resource.link} 
                  className="cursos-box" 
                  key={resource.id}
                  aria-label={`Acessar ${resource.title}`}
                >
                  <div className="cursos-box-content">
                    <img 
                      src={resource.image} 
                      alt={resource.alt} 
                      loading="lazy"
                    />
                    <h3>{resource.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AreaDoAluno;