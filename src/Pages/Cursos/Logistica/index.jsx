import React, { useState } from 'react';
import './style.css';
import '../../../App.css';

const Logistica = () => {
  const [activeTab, setActiveTab] = useState('subsequente');
  const [activeModule, setActiveModule] = useState('modulo1');

  const courseData = {
    subsequente: [
      { label: "Habilitação Profissional", value: "Técnico em Logística" },
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
          { name: "Fundamentos de Logística", weekly: "5 aulas", total: "80 horas" },
          { name: "Português Instrumental", weekly: "3 aulas", total: "48 horas" },
          { name: "Gestão de Estoques, Armazenagem e Movimentação", weekly: "5 aulas", total: "80 horas" },
          { name: "Administração", weekly: "4 aulas", total: "64 horas" },
          { name: "Estatística e Matemática Aplicada", weekly: "3 aulas", total: "48 horas" },
          { name: "Economia e Mercado", weekly: "2 aulas", total: "32 horas" },
          { name: "Sistemas de Informação", weekly: "3 aulas", total: "48 horas" }
        ],
        total: "25 aulas / 400 horas"
      },
      modulo2: {
        title: "Módulo 2",
        subjects: [
          { name: "Gestão de Transportes e Infraestrutura", weekly: "5 aulas", total: "80 horas" },
          { name: "Direito e Legislação", weekly: "3 aulas", total: "48 horas" },
          { name: "Gestão de Custos Logísticos", weekly: "3 aulas", total: "48 horas" },
          { name: "Contabilidade", weekly: "2 aulas", total: "32 horas" },
          { name: "Logística Internacional e Comércio Exterior", weekly: "3 aulas", total: "48 horas" },
          { name: "Gestão de Compras e Cadeia de Suprimentos", weekly: "5 aulas", total: "80 horas" },
          { name: "Segurança e Higiene do Trabalho", weekly: "2 aulas", total: "32 horas" },
          { name: "Relações Humanas", weekly: "2 aulas", total: "32 horas" }
        ],
        total: "25 aulas / 400 horas"
      }
    }
  };

  const objectives = [
    "Formar um profissional com visão holística e qualificado à prática profissional de logística, sensibilizado com contextos nacionais e internacionais e atento às necessidades e características históricas, culturais, econômicas e socioambientais."
  ];

  const specificObjectives = [
    "Auxiliar no planejamento, operacionalização e controle da cadeia produtiva e seu fluxo logístico.",
    "Executar procedimentos relacionados a suprimentos, produção, recebimento, armazenagem e distribuição de produtos, fazendo uso das tecnologias de informação e comunicação.",
    "Identificar agentes da cadeia de suprimentos.",
    "Elaborar relatórios operacionais para tomada de decisões."
  ];

  const profileItems = [
    "Gestão de Estoque: Capacidade de gerenciar estoques de forma eficaz, otimizando níveis de inventário e minimizando custos de armazenagem.",
    "Gestão de Transporte: Habilidade para planejar rotas, selecionar modos de transporte adequados e monitorar o transporte de cargas, buscando eficiência e redução de custos.",
    "Gerenciamento de Cadeia de Suprimentos: Conhecimento em integrar fornecedores, produção e distribuição para garantir um fluxo contínuo e eficiente de produtos.",
    "Tecnologia da Informação: Utilização de sistemas de informação e ferramentas de software para coletar, analisar e comunicar dados logísticos de maneira precisa.",
    "Sustentabilidade: Conscientização sobre a importância da sustentabilidade na logística, buscando práticas ecológicas e eficientes.",
    "Legislação e Normas: Conhecimento das regulamentações relacionadas ao transporte, armazenagem e distribuição de produtos.",
    "Economia, Custos e Contabilidade: Compreensão dos princípios econômicos, financeiros e contábeis que afetam as operações logísticas e habilidade para analisar custos logísticos.",
    "Tomada de Decisão: Capacidade de tomar decisões rápidas e eficazes para resolver problemas logísticos e imprevistos.",
    "Comunicação e Negociação: Habilidades de comunicação eficaz e capacidade de negociar com fornecedores, clientes e parceiros de negócios.",
    "Relações Humanas: Capacidade de trabalhar em equipe e liderar equipes orientando atividades logísticas, garantindo o cumprimento de metas e prazos.",
    "Aprendizado Contínuo: Disposição para atualização constante e busca por conhecimentos e tecnologias emergentes na área de logística.",
    "Ética Profissional: Atuar de forma ética, responsável e transparente em todas as atividades logísticas.",
    "Adaptabilidade: Capacidade de se adaptar a mudanças e lidar com situações adversas de forma resiliente."
  ];

  return (
    <div className="site-content">
        <br />
        <br />
        <br />
      <h1 className="cursos-titulo">LOGÍSTICA</h1>
      
      <article>
        <p className="content__p">
          O curso técnico em Logística tem por objetivo formar um profissional com visão holística e qualificado à prática profissional
          de logística, sensibilizado com contextos nacionais e internacionais e atento às necessidades e
          características históricas, culturais, econômicas e socioambientais.
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
          <h2>Perfil do Técnico em Logística</h2>
          <p>O egresso do Curso Técnico em Logística formado por
              este programa é um profissional e cidadão, sujeito que aprende e age a partir de
              conhecimentos científicos e tecnológicos, socialmente e no ambiente de trabalho. Será um
              profissional capacitado a desempenhar funções essenciais no gerenciamento de operações
              logísticas de forma eficiente, sustentável e estratégica. Ele é um elo fundamental na cadeia de
              suprimentos, responsável por planejar, executar e controlar o fluxo de materiais e informações,
              visando à otimização dos processos logísticos. Ao final do curso o aluno terá desenvolvido
              competências técnicas e competências comportamentais fundamentais ao exercício da
              profissão, tais como:</p>
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

export default Logistica;