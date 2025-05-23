import React, { useState } from 'react';
import './style.css';
import '../../../App.css';

const TransacoesImobiliarias = () => {
  const [activeTab, setActiveTab] = useState('subsequente');
  const [activeModule, setActiveModule] = useState('modulo1');

  const courseData = {
    subsequente: [
      { label: "Habilitação Profissional", value: "Técnico em Transações Imobiliárias" },
      { label: "Eixo Tecnológico", value: "Gestão e Negócios" },
      { label: "Forma de oferta", value: "Subsequente (pós-médio)" },
      { label: "Turno de oferta", value: "Noturno" },
      { label: "Carga Horária Semanal", value: "25 aulas" },
      { label: "Carga Horária de Estágio", value: "160 horas" },
      { label: "Carga Horária Total", value: "960 horas" },
      { label: "Pré-requisito", value: "Ter completado o Ensino Médio" }
    ],
    modulos: {
      modulo1: {
        title: "Módulo 1",
        subjects: [
          { name: "Português Instrumental", weekly: "5 aulas", total: "80 horas" },
          { name: "Direito e Legislação", weekly: "4 aulas", total: "64 horas" },
          { name: "Matemática Financeira", weekly: "4 aulas", total: "64 horas" },
          { name: "Operações Imobiliárias I", weekly: "5 aulas", total: "80 horas" },
          { name: "Sistemas de Informação", weekly: "4 aulas", total: "64 horas" }
        ],
        total: "25 aulas / 400 horas"
      },
      modulo2: {
        title: "Módulo 2",
        subjects: [
          { name: "Técnicas em Vendas", weekly: "5 aulas", total: "80 horas" },
          { name: "Desenho Arquitetônico e Noções de Construção Civil", weekly: "5 aulas", total: "80 horas" },
          { name: "Economia e Mercado", weekly: "3 aulas", total: "48 horas" },
          { name: "Marketing Aplicado", weekly: "5 aulas", total: "80 horas" },
          { name: "Operações Imobiliárias II", weekly: "5 aulas", total: "80 horas" },
          { name: "Empreendedorismo", weekly: "2 aulas", total: "32 horas" },
          { name: "Estágio Supervisionado", weekly: "", total: "160 horas", isInternship: true }
        ],
        total: "25 aulas / 560 horas"
      }
    }
  };

  const objectives = [
    "Oferecer um Curso Técnico em Transações Imobiliárias consolidado nos princípios epistemológicos, metodológicos e profissionalizantes como forma de garantir a abrangência dos aspectos humanísticos, científicos, técnicos e crítico-reflexivos, que permitam, ao final do curso, a formação de um profissional responsável por prestar auxílio a clientes interessados em comprar, vender ou alugar imóveis, estando apto a dar consultoria para negociações imobiliárias em geral."
  ];

  const specificObjectives = [
    "Desenvolver as capacidades relacionadas ao perfil profissional, de forma que o egresso esteja habilitado a realizar atividades de intermediação na compra, venda, permuta e locação de imóveis, sejam terrenos ou edificações, observando a legislação profissional e do setor, diretrizes de conduta e normas de saúde e segurança do trabalho."
  ];

  const profileItems = [
    "Executar atividades de intermediação na compra, venda, permuta e locação de imóveis, sejam terrenos ou edificações.",
    "Realizar captação, vistoria e demonstração de imóveis.",
    "Prestar assessoria na identificação de oportunidades de negócios, no processo de transferências, estruturações e registros imobiliários.",
    "Orientar quanto ao financiamento imobiliário.",
    "Avaliar imóveis para determinar valor de mercado."
  ];

  return (
    <div className="site-content">
        <br />
        <br />
        <br />
      <h1 className="cursos-titulo">TRANSAÇÕES IMOBILIÁRIAS</h1>
      
      <article>
        <p className="content__p">
          O Curso Técnico em Transações Imobiliárias é uma importante medida para suprir a
          demanda por profissionais qualificados e contribuir para a profissionalização e qualificação
          da mão de obra no setor imobiliário, atraindo novos profissionais para o setor, promovendo o
          desenvolvimento econômico do Estado.
          <br /><br />
          Os profissionais técnicos em Transações Imobiliárias além de trabalhar como
          corretores podem atuar em outras empresas do setor imobiliário, como empresas de
          construção civil, urbanizadoras, loteadoras, incorporadoras, agências financeiras etc.
          A possibilidade de empreender e abrir seu próprio negócio também é uma opção
          para profissionais técnicos em Transações Imobiliárias e o mercado de trabalho é amplo e
          promissor.
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
          <h2>Perfil do Técnico em Transações Imobiliárias</h2>
          <p>Alinhado ao estabelecido no Catálogo Nacional de Cursos Técnicos, do Ministério da
              Educação (CNCT), o Técnico em Transações Imobiliárias será habilitado para:</p>
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
                    <tr key={index} className={subject.isInternship ? 'estagio-row' : ''}>
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

export default TransacoesImobiliarias;