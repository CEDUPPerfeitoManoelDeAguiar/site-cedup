import React, { useState } from 'react';
import '../../../App.css';

const RecursosHumanos = () => {
  const [activeTab, setActiveTab] = useState('subsequente');
  const [activeModule, setActiveModule] = useState('modulo1');

  const courseInfo = {
    subsequente: [
      { label: "Habilitação Profissional", value: "Técnico em Recursos Humanos" },
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
          { name: "Sistemas de Informação", weekly: "3 aulas", total: "48 horas" },
          { name: "Português Instrumental", weekly: "3 aulas", total: "48 horas" },
          { name: "Matemática Financeira", weekly: "4 aulas", total: "64 horas" },
          { name: "Relações Humanas", weekly: "4 aulas", total: "64 horas" },
          { name: "Contabilidade", weekly: "3 aulas", total: "48 horas" },
          { name: "Recursos Humanos", weekly: "4 aulas", total: "64 horas" },
          { name: "Direito e Legislação", weekly: "4 aulas", total: "64 horas" }
        ],
        total: "25 aulas / 400 horas"
      },
      modulo2: {
        title: "Módulo 2",
        subjects: [
          { name: "Recursos Humanos", weekly: "5 aulas", total: "80 horas" },
          { name: "Empreendedorismo", weekly: "3 aulas", total: "48 horas" },
          { name: "Segurança do Trabalho", weekly: "2 aulas", total: "32 horas" },
          { name: "Relações Humanas", weekly: "5 aulas", total: "80 horas" },
          { name: "Sistemas de Informação", weekly: "3 aulas", total: "48 horas" },
          { name: "Inclusão de pessoas com Deficiência", weekly: "3 aulas", total: "48 horas" }
        ],
        total: "25 aulas / 400 horas"
      }
    }
  };

  const objectives = [
    "Formar técnicos em recursos humanos com competências e habilidades técnicas, comportamentais e socioemocionais, para atuar nos processos de gestão de pessoas, de forma ética e profissional."
  ];

  const specificObjectives = [
    "Desenvolver conhecimentos e saberes relacionados à área de pessoal, para atuação em conformidade com as legislações e diretrizes de conduta, como também com as normas de saúde e segurança do trabalho.",
    "Competências socioemocionais e atributos comportamentais relacionados à comunicação clara e cordial, respeito à diversidade, atenção à sustentabilidade, trabalho colaborativo, flexibilidade na resolução de conflitos e protagonismo na análise e solução de problemas."
  ];

  const profileItems = [
    "Organizar rotina diária dos processos de gestão de pessoas inerentes à relação de emprego/trabalho existente entre empresa e empregado, bem como documentos da área de recursos humanos.",
    "Processar cálculos de folha de pagamento.",
    "Registrar informações governamentais, de fiscalização, de processos trabalhistas e de auditoria interna em recursos humanos.",
    "Organizar e realizar ações de recrutamento e seleção.",
    "Realizar atividades diárias para desenvolvimento de pessoas e retenção de talentos.",
    "Organizar rotinas relativas às políticas de remuneração e cargos.",
    "Realizar atividades relativas à concessão de benefícios.",
    "Acompanhar e organizar processos administrativos de higiene e segurança do trabalho.",
    "Organizar e realizar ações de inclusão de Pessoas com Deficiência (PCDs) no ambiente de trabalho."
  ];

  return (
    <div className="site">
      <div className="site-content">
        <br />
        <br />
        <br />
        <h1 className="cursos-titulo">RECURSOS HUMANOS</h1>
        
        <article>
          <p className="content__p">
            O curso técnico em Recursos Humanos tem por objetivo formar profissionais com competências e habilidades técnicas,
            comportamentais e socioemocionais, para atuar nos processos de gestão de pessoas, de
            forma ética e profissional.
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
                  {courseInfo.subsequente.map((item, index) => (
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
            <h2>Perfil do Técnico em Recursos Humanos</h2>
            <p>Alinhado ao estabelecido no Catálogo Nacional de Cursos Técnicos do Ministério da
              Educação (CNCT), o Técnico em Recursos Humanos será habilitado para:</p>
            <ul>
              {profileItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grade-curricular">
            <h2>Grade Curricular</h2>
            <ul className="abas-grade-curricular">
              {Object.keys(courseInfo.modulos).map((modulo) => (
                <li key={modulo}>
                  <button 
                    className={`aba-grade-curricular ${activeModule === modulo ? 'active' : ''}`}
                    onClick={() => setActiveModule(modulo)}
                    aria-expanded={activeModule === modulo}
                  >
                    {courseInfo.modulos[modulo].title}
                  </button>
                </li>
              ))}
            </ul>

            {Object.keys(courseInfo.modulos).map((modulo) => (
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
                    {courseInfo.modulos[modulo].subjects.map((subject, index) => (
                      <tr key={index}>
                        <td>{subject.name}</td>
                        <td>{subject.weekly}</td>
                        <td>{subject.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="total-hours">Carga horária Total do {courseInfo.modulos[modulo].title}: {courseInfo.modulos[modulo].total}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default RecursosHumanos;