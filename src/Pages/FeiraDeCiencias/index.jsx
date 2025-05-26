import React from 'react';
import './style.css';
import '../../App.css';

const FeiraCiencia = () => {
  return (
    <div className="feira-container">
      <br />
      <br />
      <h1 className="feira-title">IV Feira de Ciência e Tecnologia do CEDUP</h1>
      
      <section className="feira-section">
        <h2>📍 Data e Local</h2>
        <p>A feira acontecerá no dia 30 de junho de 2025, nas dependências do CEDUP Perfeito Manoel de Aguiar, em Guaramirim/SC.</p>
        <ul className="feira-list">
          <li>Abertura: 8h30</li>
          <li>Exposição dos trabalhos: 9h às 15h30</li>
          <li>Premiação e encerramento: 16h</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>🎯 Objetivos da Feira</h2>
        <p>A Feira de Ciência e Tecnologia é uma atividade de iniciação científica que visa:</p>
        <ul className="feira-list">
          <li>Incentivar a pesquisa científica e a criatividade entre os estudantes.</li>
          <li>Estimular o uso do método científico e a resolução de problemas reais.</li>
          <li>Promover o intercâmbio de ideias entre estudantes, professores e visitantes.</li>
          <li>Fortalecer os laços entre escola, comunidade e instituições de ensino superior.</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>🌱 Tema 2025</h2>
        <p className="feira-theme">"Culturas Inteligentes: Inovações Sustentáveis na Cidade e no Campo"</p>
        <p>A temática propõe soluções inovadoras com foco na sustentabilidade, abrangendo os seguintes eixos:</p>
        <ul className="feira-list">
          <li>Inclusão social e bem-estar comunitário</li>
          <li>Sustentabilidade ambiental</li>
          <li>Redução das desigualdades</li>
          <li>Cidades inteligentes e tecnologia sustentável</li>
          <li>Desenvolvimento rural inovador</li>
          <li>Educação para o Desenvolvimento Sustentável</li>
        </ul>
        
        <p>Os projetos devem estar alinhados aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU, especialmente:</p>
        <ul className="feira-list ods-list">
          <li>ODS 2 – Fome Zero e agricultura sustentável</li>
          <li>ODS 6 – Água potável e saneamento</li>
          <li>ODS 7 – Energia limpa e acessível</li>
          <li>ODS 9 – Indústria, inovação e infraestrutura</li>
          <li>ODS 11 – Cidades e comunidades sustentáveis</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>🧪 Quem Pode Participar</h2>
        <ul className="feira-list">
          <li>Estudantes do Ensino Médio e da Educação Profissional do CEDUP</li>
          <li>Cada projeto deve ter até 2 expositores e um professor orientador</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>📋 Inscrição dos Trabalhos</h2>
        <ul className="feira-list">
          <li>Período: de 02 a 18 de junho de 2025</li>
          <li>Entrega da ficha de inscrição impressa e do projeto conforme modelo oficial</li>
          <li>Os trabalhos devem estar dentro da temática e seguir o modelo científico solicitado</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>🏆 Premiação</h2>
        <p>Serão premiados os três melhores trabalhos em cada categoria (Ensino Médio e Educação Profissional):</p>
        <ul className="feira-list">
          <li>🥇 1º lugar: troféu e medalhas + participação na XVI Feira Regional</li>
          <li>🥈 2º lugar: medalhas</li>
          <li>🥉 3º lugar: medalhas</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>✅ Avaliação</h2>
        <p>Os projetos serão avaliados por professores convidados com base em:</p>
        <ul className="feira-list">
          <li>Clareza e domínio na apresentação</li>
          <li>Domínio do conteúdo e aplicação científica</li>
          <li>Qualidade do trabalho (metodologia, resultados, referências)</li>
          <li>Relevância social, ambiental e inovação</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>🛠 Estrutura dos Stands</h2>
        <ul className="feira-list">
          <li>Área de 2x2 metros (4 m²)</li>
          <li>Mesa de apoio (1,20m x 0,75m) + painel frontal (0,80m x 0,70m) com identificação</li>
          <li>Os expositores devem montar seus estandes no dia 28/06 e desmontar após as 15h30 do dia do evento</li>
        </ul>
      </section>

      <section className="feira-section">
        <h2>📣 Público-Alvo</h2>
        <p>Aberto à comunidade em geral.</p>
        <p>Visitantes poderão interagir com os estudantes, conhecer os projetos e participar das atividades propostas.</p>
      </section>

      <section className="feira-section">
        <h2>🤝 Organização</h2>
        <p>A Feira é organizada pela equipe do CEDUP com apoio da 24ª Coordenadoria Regional de Educação de Jaraguá do Sul.</p>
      </section>

      <section className="feira-section contact-section">
        <p>Para mais informações ou dúvidas, entre em contato com a equipe organizadora através do e-mail: <a href="mailto:cedupguaramirim@sed.sc.gov.br">cedupguaramirim@sed.sc.gov.br</a></p>
      </section>

      <section className="feira-section">
        <h2>📎 Documentos para Download</h2>
        <p>Os arquivos oficiais da feira estão disponíveis para consulta e download. Acesse abaixo:</p>
        <ul className="feira-list download-list">
          <li>
            <a href="/public/documentos/REGULAMENTO I FEIRA DE CIÊNCIA E TECNOLOGIA CEDUP.pdf" download>
              Regulamento completo da feira (Edital)
            </a>
          </li>
          <li>
            <a href="/public/documentos/Projeto de Pesquisa - Template.docx" download>
              Modelo de projeto (Anexo II)
            </a>
          </li>
          <li>
            <a href="/public/documentos/Ficha de Inscrição.docx" download>
              Ficha de inscrição (Anexo I)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FeiraCiencia;