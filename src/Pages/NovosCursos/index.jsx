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
            Novos cursos técnicos subsequentes serão ofertados no segundo semestre de 2024: 
            <strong> Transações Imobiliárias</strong> e <strong>Recursos Humanos</strong>.
            <br /><br />
            Se você tem interesse em dar continuidade a seus estudos, essa é sua chance!
            <br />Acesse o formulário para indicar sua intenção, e assim que o período de 
            matrículas estiver aberto entraremos em contato!
          </p>
          
          <a 
            className="download1" 
            href="https://forms.gle/Rspv9iXzPoGmsCLF7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Formulário de intenção de matrícula"
          >
            Indicar intenção de matrícula
          </a>

          <div className="course-section">
            <h3 className="título-nossahistoria">Transações Imobiliárias</h3>
            <p>
              Os profissionais técnicos em Transações Imobiliárias além de trabalhar como
              corretores podem atuar em outras empresas do setor imobiliário, como empresas de
              construção civil, urbanizadoras, loteadoras, incorporadoras, agências financeiras etc.
              A possibilidade de empreender e abrir seu próprio negócio também é uma opção.
            </p>
            
            <Link className="download" to="/transacoesimobiliarias" aria-label="Mais informações sobre Transações Imobiliárias">
              Saiba mais sobre o curso
            </Link>
          </div>

          <div className="course-section">
            <h3 className="título-nossahistoria">Recursos Humanos</h3>
            <p>
              O curso técnico em Recursos Humanos tem por objetivo formar profissionais com competências e habilidades técnicas,
              comportamentais e socioemocionais, para atuar nos processos de gestão de pessoas, de
              forma ética e profissional.
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