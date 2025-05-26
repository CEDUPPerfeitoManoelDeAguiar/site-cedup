import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const NovosCursos = () => {
  return (
    <div className="site">
        <br />
        <br />
        <br />
      <div className="site-content container">
        <h1 className="cursos-titulo-pronatec">Novos Cursos 2025/04</h1>

        <article className="content__pronatec">
          <p className="intro-text">
            Novo curso técnico subsequente será ofertado no segundo semestre de 2025: 
            <strong> Recursos Humanos</strong>.
            <br /><br />
            Se você tem interesse em dar continuidade a seus estudos, essa é sua chance!
            <br />Acesse o formulário para indicar sua intenção, e assim que o período de 
            matrículas estiver aberto entraremos em contato!
          </p>
          
          <a 
            className="download1" 
            href="https://chat.whatsapp.com/ENpkUsBFhIQ0n8WwKekp9p "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Formulário de intenção de matrícula"
          >
            Entrar no grupo de WhatsApp para receber informações sobre o curso
          </a>

          <div className="course-section">
            <h3 className="título-nossahistoria">Recursos Humanos</h3>
            <p>
              O curso técnico em Recursos Humanos tem por objetivo formar profissionais preparados para atuar em todos os processos de gestão de pessoas, desde o recrutamento e seleção até o desenvolvimento, treinamento, avaliação de desempenho e administração de benefícios. 
              <br /><br />
              O profissional formado estará apto a lidar com rotinas de departamento pessoal, legislação trabalhista, folha de pagamento, além de desenvolver habilidades comportamentais e socioemocionais essenciais para o ambiente corporativo moderno.
              <br /><br />
              O curso também aborda temas como comunicação organizacional, ética profissional, clima e cultura organizacional, promovendo uma visão estratégica do papel do RH nas empresas. 
              <br /><br />
              O técnico em RH pode atuar em empresas de todos os portes e segmentos, consultorias, órgãos públicos e também empreender na área de gestão de pessoas.
            </p>
            
            <Link className="download" to="/recursoshumanos" aria-label="Mais informações sobre Recursos Humanos">
              Saiba mais sobre o curso
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NovosCursos;