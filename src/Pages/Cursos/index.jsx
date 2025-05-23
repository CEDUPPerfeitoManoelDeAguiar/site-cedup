import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css'

const Cursos = () => {
    
  const courses = [
    {
      id: 1,
      title: "Administração",
      image: "/imagens/cursos/Adminstração.png",
      modalidades: "Integrado ao Ensino Médio - Integral\nSubsequente - Noturno\n100% presencial",
      link: "/administracao"
    },
    {
      id: 2,
      title: "Ciência de Dados",
      image: "/imagens/cursos/Ciência de Dados.png",
      modalidades: "Integrado ao Ensino Médio - Integral\n100% presencial",
      link: "/cienciasdados"
    },
    {
      id: 3,
      title: "Logística",
      image: "/imagens/cursos/Logística.png",
      modalidades: "Subsequente - Noturno\n100% presencial",
      link: "/logistica"
    },
    {
      id: 4,
      title: "Recursos Humanos",
      image: "/imagens/cursos/Recursos humanos.png",
      modalidades: "Subsequente - Noturno\n100% presencial",
      link: "/recursoshumanos",
    },
    {
      id: 5,
      title: "Transações Imobiliárias",
      image: "/imagens/cursos/Transações imobiliárias.png",
      modalidades: "Subsequente - Noturno\n100% presencial",
      link: "/transacoesimobiliarias"
    },
    {
      id: 6,
      title: "Desenvolvimento de Sistemas",
      image: "/imagens/cursos/Desenvolvimento de Sistemas.png",
      modalidades: "Integrado ao Ensino Médio - Integral\nSubsequente - Noturno\n100% presencial",
      link: "/desenvolvimento-sistemas"
    },
    {
      id: 7,
      title: "Qualidade",
      image: "/imagens/cursos/Logística.png",
      modalidades: "Subsequente - Noturno\n100% presencial",
      link: "/qualidade"
    }
  ];

  return (
    <main className="site">
      <div className="site-content">
        <section className="cursos" id="cursos" name="cursos">
          <h2 className="cursos-titulo">CURSOS</h2>
          <div className="interface">
            <div className="cursos-container">
              {courses.map((course) => (
                <Link 
                  to={course.link} 
                  className="cursos-box" 
                  key={course.id}
                >
                  <div className="cursos-box-content">
                    <img src={course.image} alt={course.title} />
                    <h3>{course.title}</h3>
                    <p className="cursos-subtitulo">
                      <b>Modalidades:</b> <br />
                      {course.modalidades.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
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


export default Cursos;