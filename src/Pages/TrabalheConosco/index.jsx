import React from 'react';
import '../../App.css';
import './style.css';

const TrabalheConosco = () => {
  const documents = [
    {
      id: 1,
      title: "Declaração de escolha de aulas",
      description: "A declaração de escolha de aulas é o e-mail enviado pela SED comprovando o preenchimento da vaga pelo candidato"
    },
    {
      id: 2,
      title: "Diploma e histórico escolar ou atestado de frequência atualizado",
      description: (
        <>
          <p className="content__p">
            Para ser considerado <b>habilitado</b>, o professor deverá portar diploma de Licenciatura Plena 
            ou curso superior de Tecnologia ou Bacharelado em sua área de atuação com complementação 
            pedagógica.
          </p>
          <p className="content__p">
            Para os cursos da modalidade pós-médio (noturno) somente é permitida a contratação de 
            professores já formados, e caso não possuam Licenciatura ou Complementação pedagógica, serão 
            considerados <b>não habilitados.</b>
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "RG",
      description: "A data de emissão do documento não poderá passar da sua validade, ou seja, 10 anos."
    },
    {
      id: 4,
      title: "CPF",
      description: "Devidamente regularizado"
    },
    {
      id: 5,
      title: "Título de eleitor"
    },
    {
      id: 6,
      title: "Certidão de quitação eleitoral",
      description: (
        <p className="content__p">
          A certidão de quitação eleitoral deverá ser emitida no site do 
          <a href="https://www.tse.jus.br/servicos-eleitorais/certidoes/certidao-de-quitacao-eleitoral" target="_blank" rel="noopener noreferrer"> TSE</a>
        </p>
      )
    },
    {
      id: 7,
      title: "Carteira de trabalho"
    },
    {
      id: 8,
      title: "PIS/PASEP"
    },
    {
      id: 9,
      title: "Comprovante de conta bancária no Banco do Brasil",
      description: "Para fins de comprovação, o candidato poderá apresentar seu cartão ou cópia de tela do aplicativo bancário."
    },
    {
      id: 10,
      title: "Comprovante de residência",
      description: "São aceitos como comprovante de residência talões de água, luz ou telefone atualizado (até 90 dias) e em nome próprio, ou, no caso de comprovante em nome de terceiros, declaração do titular, devidamente reconhecida em cartório, de que reside no respectivo endereço."
    },
    {
      id: 11,
      title: "Certidão de antecedentes criminais",
      description: (
        <p className="content__p">
          A certidão deverá ser emitida pela <a href="https://delegaciavirtual.sc.gov.br/atestado-antecedentes/novo" target="_blank" rel="noopener noreferrer">
          Delegacia Virtual.</a>
        </p>
      )
    },
    {
      id: 12,
      title: "Atestado médico",
      description: "Ter validade inferior a 30 dias e deve comprovar a aptidão física e mental para o exercício das atribuições do cargo"
    },
    {
      id: 13,
      title: "Comprovante de quitação dos serviços militares",
      description: "Pessoas do sexo masculino devem apresentar o comprovante de quitação das obrigações do Serviço Militar"
    },
    {
      id: 14,
      title: "Comprovante de pleno exercício dos seus direitos civis",
      description: (
        <>
          <p className="content__p">
            Para comprovar seus direitos civis, deverá emitir a declaração no site do <a href="https://www.tjsc.jus.br/web/judicial/certidoes" target="_blank" rel="noopener noreferrer"> TJSC</a>
          </p>
          <p className="content__p">
            Ao solicitar sua certidão, em Instância Judicial selecione as opções <strong>Comarcas e Turmas (Primeiro Grau) e Tribunal de Justiça (Segundo Grau)</strong>,
            em seguida, em Modelo de certidão, selecione a opção <strong>Cível</strong>, conforme apresenta a imagem a seguir:
          </p>
          <img 
            className="trabalhe-conosco-imagem" 
            src="../imagens/trabalhe-conosco/certidao-direitos-civis.PNG" 
            alt="Tela de solicitação de certidões criminais mostrando as opções de instância judicial e modelo de certidão" 
          />
          <p className="content__p">
            Preencha os dados solicitados e conclua a solicitação. Aguarde alguns minutos e receberá duas mensagens de e-mail,
            sendo a primeira, a confirmação da solicitação, e a segunda o link e código de acesso da sua certidão.
          </p>
        </>
      )
    },
    {
      id: 15,
      title: "Comprovante de qualificação cadastral no Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas (eSocial)",
      description: (
        <p className="content__p">
          Este documento pode ser consultado no site do <a href="consultacadastral.inss.gov.br/Esocial/pages/qualificacao/qualificar.xhtml" target="_blank" rel="noopener noreferrer"> eSocial</a> 
          e impressa a tela de consulta.
        </p>
      )
    }
  ];

   return (
    <main className="content">
      <article>
        <br />
        <br />
        <br />
        <h1 className="content__title">Documentos necessários para contratação de professores:</h1>
        
        <div className="document-list">
          {documents.map((doc) => (
            <div key={doc.id} className="document-item">
              {doc.description ? (
                <div className="expandable-item">
                  <input 
                    type="checkbox" 
                    id={`toggle-${doc.id}`} 
                    className="expandable-checkbox"
                  />
                  <label className="label-list" htmlFor={`toggle-${doc.id}`}>
                    {doc.title}
                  </label>
                  <div className="expandable-content">
                    {doc.description}
                  </div>
                </div>
              ) : (
                <div className="label-list no-description">
                  {doc.title}
                </div>
              )}
            </div>
          ))}
          <a className="submenu" href="/quero-trabalhar">Trabalhe Conosco</a>  
        </div>
        
      </article>
      
    </main>
  );
};

export default TrabalheConosco;