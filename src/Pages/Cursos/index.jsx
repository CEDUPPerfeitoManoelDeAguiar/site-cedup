import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

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
      link: "/recursoshumanos"
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
      link: "/sistemas"
    },
    {
      id: 7,
      title: "Qualidade",
      image: "/imagens/cursos/qualidade.png",
      modalidades: "Subsequente - Noturno\n100% presencial",
      link: "/qualidade"
    }
  ];

  return (
    <main>
      <section className="cursos" id="cursos" name="cursos">
        <br />
        <br />
        <br />
        <h2 className="cursos-titulo">CURSOS</h2>
        <div className="interface">
          <div className="flex1">
            {courses.map((course) => (
              <div className="cursos-box" key={course.id}>
                {course.link !== "#" ? (
                  <Link to={course.link}>
                    <img src={course.image} alt={course.title} />
                  </Link>
                ) : (
                  <img src={course.image} alt={course.title} />
                )}
                <h3>{course.title}</h3>
                <br />
                <br />
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cursos;