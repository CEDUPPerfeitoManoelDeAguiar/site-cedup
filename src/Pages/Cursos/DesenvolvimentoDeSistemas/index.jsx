import React, { useState } from 'react';
import './style.css';
import '../../../App.css';

const DesenvolvimentoSistemas = () => {
  const [activeTab, setActiveTab] = useState('subsequente');
  const [activeModule, setActiveModule] = useState('modulo1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleModuleChange = (module) => {
    setActiveModule(module);
  };

  const courseData = {
    subsequente: [
      { label: "Habilitação Profissional", value: "Técnico em Desenvolvimento de Sistemas" },
      { label: "Eixo Tecnológico", value: "Informação e Comunicação" },
      { label: "Forma de oferta", value: "Subsequente (pós médio)" },
      { label: "Turno de oferta", value: "Noturno" },
      { label: "Carga Horária Semanal", value: "25 aulas" },
      { label: "Carga Horária de Estágio", value: "Não há estágio" },
      { label: "Carga Horária Total", value: "1200 horas" },
      { label: "Pré-requisito", value: "Ter completado o Ensino Médio" }
    ],
    integrado: [
      { label: "Habilitação Profissional", value: "Técnico em Desenvolvimento de Sistemas" },
      { label: "Eixo Tecnológico", value: "Informação e Comunicação" },
      { label: "Forma de oferta", value: "Integrado ao Ensino Médio" },
      { label: "Turno de oferta", value: "Integral (manhã e tarde)" },
      { label: "Carga Horária Semanal", value: "44 aulas" },
      { label: "Carga Horária de Estágio", value: "Não há estágio" },
      { label: "Carga Horária Total", value: "1200 horas" },
      { label: "Pré-requisito", value: "Estar cursando o Ensino Médio integrado ao profissionalizante no CEDUP" }
    ],
    concomitante: [
      { label: "Habilitação Profissional", value: "Técnico em Desenvolvimento de Sistemas" },
      { label: "Eixo Tecnológico", value: "Informação e Comunicação" },
      { label: "Forma de oferta", value: "Integrado ao Ensino Médio" },
      { label: "Turno de oferta", value: "Noturno" },
      { label: "Carga Horária Semanal", value: "25 aulas" },
      { label: "Carga Horária de Estágio", value: "Não há estágio" },
      { label: "Carga Horária Total", value: "1200 horas" },
      { label: "Pré-requisito", value: "Estar cursando a 1ª ou 2ª série do Ensino Médio em uma escola da rede Estadual de Santa Catarina" }
    ],
    modulos: {
      modulo1: {
        title: "Módulo 1",
        subjects: [
          { name: "Introdução à programação", weekly: "10 aulas", total: "160 horas" },
          { name: "Sistemas de Informação", weekly: "5 aulas", total: "80 horas" },
          { name: "Inglês aplicado", weekly: "2 aulas", total: "32 horas" },
          { name: "Infraestrutura computacional", weekly: "3 aulas", total: "48 horas" },
          { name: "Introdução à banco de dados", weekly: "5 aulas", total: "80 horas" }
        ],
        total: "25 aulas / 400 horas",
        certificacao: "Módulo I – Assistente de Desenvolvimento de Sistemas",
        perfil: "Utiliza a capacidade de raciocínio lógico na decomposição e abstração de problemas propostos para a compreensão das etapas de planejamento de um software."
      },
      modulo2: {
        title: "Módulo 2",
        subjects: [
          { name: "Desenvolvimento Web I", weekly: "10 aulas", total: "160 horas" },
          { name: "Programação Orientada a Objetos", weekly: "5 aulas", total: "80 horas" },
          { name: "Linguagem SQL", weekly: "5 aulas", total: "80 horas" },
          { name: "Relações humanas", weekly: "2 aulas", total: "32 horas" },
          { name: "Modelagem de sistemas/UML", weekly: "3 aulas", total: "48 horas" }
        ],
        total: "25 aulas / 400 horas",
        certificacao: "Módulo II – Desenvolvedor back-end",
        perfil: "Utiliza linguagem de programação para desenvolver, implementar e manter a estrutura de um sistema, gerenciando suas informações server-side (do lado do servidor), documentando as etapas do processo e gerenciando a segurança e acesso às informações."
      },
      modulo3: {
        title: "Módulo 3",
        subjects: [
          { name: "Desenvolvimento Web II", weekly: "10 aulas", total: "160 horas" },
          { name: "Empreendedorismo, criatividade e inovação", weekly: "3 aulas", total: "48 horas" },
          { name: "Prototipagem em UI/UX Design", weekly: "5 aulas", total: "80 horas" },
          { name: "Qualidade e testes de software", weekly: "2 aulas", total: "32 horas" },
          { name: "Computação em nuvem e web services", weekly: "3 aulas", total: "48 horas" },
          { name: "Metodologias ágeis", weekly: "2 aulas", total: "32 horas" }
        ],
        total: "25 aulas / 400 horas",
        certificacao: "Módulo III – Desenvolvedor front-end",
        perfil: "Utiliza linguagem de programação para desenvolver websites e aplicações web client-side (do lado do cliente) responsivos e acessível que atendam padrões e critérios de usabilidade."
      }
    }
  };

  const objectives = [
    "Preparar o estudante para o desenvolvimento de habilidades, competências e conhecimentos necessários para projetar, desenvolver, testar e manter softwares de maneira eficiente e eficaz a partir dos princípios éticos para atuação na área de desenvolvimento de sistemas."
  ];

  const specificObjectives = [
    "Adquirir habilidades em desenvolvimento de sistemas por meio de linguagens de programação de alto nível e técnicas de codificação para criação de aplicações web.",
    "Compreender os princípios de design de software, projetando-os de forma eficaz considerando sua escalabilidade, manutenção e usabilidade.",
    "Desenvolver raciocínio lógico por meio de técnicas de abstração e decomposição de problemas, a fim de identificar requisitos para construção das melhores soluções centradas no usuário.",
    "Desenvolver aplicações com base em marcos legais visando a acessibilidade de sistemas de informação.",
    "Conhecer a tecnologia e a produção para utilizar a estrutura de dados na resolução de problemas computacionais.",
    "Desenvolver habilidades para o espírito de liderança na coordenação de equipes de trabalho.",
    "Desempenhar funções gerenciais e técnicas, na qualidade de agente de transformação social, de forma a contribuir para o desenvolvimento socioeconômico regional.",
    "Auxiliar o analista na elaboração de projetos e desenvolvimento de sistemas.",
    "Construir e manter banco de dados garantindo os aspectos de segurança, integridade e recuperação de informação.",
    "Interagir de forma criativa e dinâmica no mundo do trabalho e na comunidade local."
  ];

  const profileItems = [
    "Desenvolver sistemas computacionais utilizando ambiente de desenvolvimento;",
    "Dimensionar requisitos e funcionalidades do sistema;",
    "Realizar testes funcionais de programas de computador e aplicativos;",
    "Manter registros para análise e refinamento de resultados;",
    "Executar manutenção de programas de computador e suporte técnico;",
    "Realizar modelagem de aplicações computacionais;",
    "Codificar aplicações e rotinas utilizando linguagens de programação específicas;",
    "Executar alterações e manutenções em aplicações e rotinas de acordo com as definições estabelecidas;",
    "Prestar apoio técnico na elaboração da documentação de sistemas;",
    "Realizar prospecções, testes e avaliações de ferramentas e produtos de desenvolvimento de sistemas;"
  ];

  return (
    <div className="site-content">
        <br />
        <br />
        <br />
      <h1 className="cursos-titulo">DESENVOLVIMENTO DE SISTEMAS</h1>
      
      <article>
        <p className="content__p">
          O curso técnico em Desenvolvimento de Sistemas tem por objetivo preparar o estudante para o desenvolvimento de habilidades, 
          competências e conhecimentos necessários para projetar, desenvolver, testar e manter softwares 
          de maneira eficiente e eficaz a partir dos princípios éticos para atuação na área de desenvolvimento de sistemas.
        </p>
        
        <div className="tabela-curso">
          <ul className="app__card-list abas-curso">
            {Object.keys(courseData).filter(key => key !== 'modulos').map((tab) => (
              <li key={tab} className="app__card-list-item">
                <button 
                  className={`app__card-button aba-curso ${activeTab === tab ? 'active' : ''}`} 
                  onClick={() => handleTabChange(tab)}
                  aria-expanded={activeTab === tab}
                >
                  {tab === 'subsequente' && 'Modalidade Subsequente'}
                  {tab === 'integrado' && 'Modalidade Integrado'}
                  {tab === 'concomitante' && 'Modalidade Concomitante'}
                </button>
              </li>
            ))}
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
          
          <div className={`conteudo-aba-curso ${activeTab === 'integrado' ? 'active' : ''}`} id="integrado">
            <table className="integrado-table">
              <tbody>
                {courseData.integrado.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.label}</th>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className={`conteudo-aba-curso ${activeTab === 'concomitante' ? 'active' : ''}`} id="concomitante">
            <table className="concomitante-table">
              <tbody>
                {courseData.concomitante.map((item, index) => (
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
          <h2>Perfil do Técnico em Desenvolvimento de Sistemas</h2>
          <p>O Técnico em Desenvolvimento de Sistemas, de acordo com o Catálogo Nacional de Cursos Técnicos, será habilitado para:</p>
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
                  onClick={() => handleModuleChange(modulo)}
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
              <p><strong>Certificação intermediária:</strong> {courseData.modulos[modulo].certificacao}</p>
              <p><strong>Perfil profissional:</strong> {courseData.modulos[modulo].perfil}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default DesenvolvimentoSistemas;