import React, { useState } from 'react';
import './style.css';
import '../../../App.css';

const Qualidade = () => {
  const [activeTab, setActiveTab] = useState('subsequente');
  const [activeModule, setActiveModule] = useState('modulo1');

  const courseData = {
    subsequente: [
      { label: "Habilitação Profissional", value: "Técnico em Qualidade" },
      { label: "Eixo Tecnológico", value: "Gestão e Negócios" },
      { label: "Forma de oferta", value: "Subsequente (pós-médio)" },
      { label: "Turno de oferta", value: "Noturno" },
      { label: "Carga Horária Semanal", value: "25 aulas" },
      { label: "Carga Horária de Estágio", value: "Não possui estágio" },
      { label: "Carga Horária Total", value: "800 horas" },
      { label: "Pré-requisito", value: "Ter completado o Ensino Médio" }
    ],
    modulos: {
      modulo1: {
        title: "Módulo 1",
        subjects: [
          { name: "Sistemas de Informação", weekly: "2 aulas", total: "32 horas" },
          { name: "Administração da Produção", weekly: "3 aulas", total: "48 horas" },
          { name: "Desenho Técnico", weekly: "3 aulas", total: "48 horas" },
          { name: "Estatística", weekly: "2 aulas", total: "32 horas" },
          { name: "Gestão da Qualidade", weekly: "4 aulas", total: "64 horas" },
          { name: "Metodologia Científica", weekly: "2 aulas", total: "32 horas" },
          { name: "Metrologia", weekly: "3 aulas", total: "48 horas" },
          { name: "Normatização e Legislação da Qualidade", weekly: "4 aulas", total: "64 horas" },
          { name: "Relações Humanas", weekly: "2 aulas", total: "32 horas" }
        ],
        total: "25 aulas / 400 horas"
      },
      modulo2: {
        title: "Módulo 2",
        subjects: [
          { name: "Auditoria da Qualidade", weekly: "3 aulas", total: "48 horas" },
          { name: "Controle Estatístico de Processo", weekly: "3 aulas", total: "48 horas" },
          { name: "Custos de Qualidade", weekly: "3 aulas", total: "48 horas" },
          { name: "Gestão da Qualidade", weekly: "3 aulas", total: "48 horas" },
          { name: "Gestão de Projetos", weekly: "3 aulas", total: "48 horas" },
          { name: "Processos de Fabricação", weekly: "3 aulas", total: "48 horas" },
          { name: "Segurança e Higiene no Trabalho", weekly: "2 aulas", total: "32 horas" },
          { name: "Sustentabilidade", weekly: "2 aulas", total: "32 horas" },
          { name: "Tecnologias e Sistemas da Gestão da Qualidade", weekly: "3 aulas", total: "48 horas" }
        ],
        total: "25 aulas / 400 horas"
      }
    }
  };

  const objectives = [
    "Formar profissionais capazes de compreender as constantes modificações pelas quais os mercados passam e que tenham habilidade de traduzir essas mutações para os processos produtivos das organizações, atendendo-as de forma eficiente e eficaz."
  ];

  const specificObjectives = [
    "Desenvolver profissionais que possam compreender os processos de gestão organizacional, a partir da análise de suas causas e efeitos e com capacidade crítica de intervenção.",
    "Habilitar o estudante para a utilização de ferramentas de identificação, análise e resolução de problemas envolvendo a qualidade.",
    "Promover o desenvolvimento tecnológico, visando a melhoria na qualidade de vida da comunidade em geral, através de um constante processo de avaliação e integração entre Centro de Educação e a comunidade empresarial."
  ];

  const profileItems = [
    "Elaborar manuais, procedimentos, diagnósticos e relatórios de processos de qualidade das organizações.",
    "Registrar o controle da qualidade.",
    "Executar auditorias internas da qualidade.",
    "Acompanhar auditorias externas.",
    "Divulgar os procedimentos de qualidade e propõe ações de informação e formação específica.",
    "Identificar inconformidades em serviços, produtos e processos e suas possíveis causas.",
    "Propor ações corretivas e preventivas."
  ];

  return (
    <div className="site-content">
        <br />
        <br />
        <br />
      <h1 className="cursos-titulo">QUALIDADE</h1>
      
      <article>
        <p className="content__p">
          O curso Técnico em Qualidade tem como principal objetivo formar profissionais capazes de
          compreender as constantes modificações pelas quais os mercados passam e que tenham
          habilidade de traduzir essas mutações para os processos produtivos das organizações,
          atendendo-as de forma eficiente e eficaz.
        </p>
        
        <div className="tabela-curso">
          <ul className="app__card-list abas-curso">
            <li className="app__card-list-item">
              <button 
                className={`app__card-button aba-curso ${activeTab === 'subsequente' ? 'active' : ''}`} 
                onClick={() => setActiveTab('subsequente')}
                aria-expanded={activeTab === 'subsequente'}
              >
                Modalidade Subsequente
              </button>
            </li>
          </ul>
          
          <div className={`conteudo-aba-curso ${activeTab === 'subsequente' ? 'active' : ''}`} id="subsequente">
            <table className="subsequente-table">
              <tbody>
                {courseData.subsequente.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.label}</th>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="objetivos">
          <h2>Objetivo Geral</h2>
          {objectives.map((obj, index) => (
            <p key={index}>{obj}</p>
          ))}
      
          <h2>Objetivos Específicos</h2>
          <ul>
            {specificObjectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
        
        <div className="perfil-egresso">
          <h2>Perfil do Técnico em Qualidade</h2>
          <p>Alinhado ao estabelecido no Catálogo Nacional de Cursos Técnicos do Ministério da
              Educação (CNCT), o Técnico em Qualidade será habilitado para:</p>
          <ul>
            {profileItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="grade-curricular">
          <h2>Grade Curricular</h2>
          <ul className="abas-grade-curricular">
            {Object.keys(courseData.modulos).map((modulo) => (
              <li key={modulo}>
                <button 
                  className={`aba-grade-curricular ${activeModule === modulo ? 'active' : ''}`} 
                  onClick={() => setActiveModule(modulo)}
                  aria-expanded={activeModule === modulo}
                >
                  {courseData.modulos[modulo].title}
                </button>
              </li>
            ))}
          </ul>
          
          {Object.keys(courseData.modulos).map((modulo) => (
            <div 
              key={modulo}
              className={`conteudo-aba-grade-curricular ${activeModule === modulo ? 'active' : ''}`}
              id={modulo}
              role="tabpanel"
            >
              <table className={`${modulo}-table`}>
                <thead>
                  <tr>
                    <th scope="col">Disciplinas</th>
                    <th scope="col">Carga Semanal</th>
                    <th scope="col">Carga Horária Total</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.modulos[modulo].subjects.map((subject, index) => (
                    <tr key={index}>
                      <td>{subject.name}</td>
                      <td>{subject.weekly}</td>
                      <td>{subject.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="total-hours">Carga horária Total do {courseData.modulos[modulo].title}: {courseData.modulos[modulo].total}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Qualidade;