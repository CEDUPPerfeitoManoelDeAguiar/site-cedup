import React from 'react';
import './style.css';
import '../../App.css';

const QueroTrabalhar = () => {
  return (
    <main>
      
      
      <div className="content">
        <br />
        <br />
        <h1>Quer trabalhar no CEDUP?</h1>
        <p>
          Atuamos com cursos técnicos de nível médio nas modalidades integrado ao ensino médio, subsequente e concomitante. <br />
          O preenchimento de vagas se dá por meio de processo seletivo realizado pela SED SC, conforme editais vigentes.<br />
          Se você tem interesse em trabalhar conosco nas áreas técnicas, envie o formulário abaixo contendo seus dados.<br />
          Surgindo vagas avisaremos via e-mail.
        </p>
        
        <div className="divisões">
          <div className="quadro-contato">
            <form className="cadastro" action="https://formsubmit.co/cedupguaramirim@sed.sc.gov.br" method="POST">
              <div className="field">
                <label htmlFor="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required /><br />
              </div>
              
              <div className="field">
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" required /><br />
              </div>

              <div className="field">
                <label htmlFor="telefone">WhatsApp:</label>
                <input type="tel" id="telefone" name="telefone" /><br />
              </div>

              <div className="field">
                <label htmlFor="eixo">Eixo:</label> <br />
                <select className="field" id="eixo" name="eixo">
                  <option value=""></option>
                  <option value="gestao">Gestão e Negócios</option>
                  <option value="informacao">Informação e Comunicação</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="graduacao">Graduação:</label>
                <input type="text" id="graduacao" name="graduacao" /><br />
              </div>

              <div className="field">
                <label>Possui licenciatura?</label><br />
                <div className="checkbox-group">
                  <input type="radio" id="licenciatura_sim" name="licenciatura" value="Sim" />
                  <label htmlFor="licenciatura_sim">Sim</label>
                  <input type="radio" id="licenciatura_nao" name="licenciatura" value="Não" />
                  <label htmlFor="licenciatura_nao">Não</label>
                </div>
              </div>

              <div className="field">
                <label htmlFor="especializacao">Especialização:</label>
                <input type="text" id="especializacao" name="especializacao" /><br />
              </div>

              <div className="field">
                <label htmlFor="posgraduacao">Pós-Graduação:</label> <br />
                <select className="field" id="posgraduacao" name="posgraduacao">
                  <option value=""></option>
                  <option value="especializacao">Especialização</option>
                  <option value="mestrado">Mestrado</option>
                  <option value="doutorado">Doutorado</option>
                </select>
              </div>

              <input type="submit" name="acao" value="Enviar" />
              <input type="hidden" name="_subject" value="Novo Currículo" />
              <input type="text" name="_honey" style={{display:'none'}} />
              <input type="hidden" name="_captcha" value="false" />

             
            </form>
            
          </div>
        
        </div>
           <div className="menu_sobre">
                <a className="submenu" href="/contato">Fale Conosco</a>                    
                <a className="submenu" href="https://www.sed.sc.gov.br/concursos/act-admissao-de-professores-em-carater-temporario/ ">Mais Informações</a>                    
            </div>
      </div>
    </main>
  );
};

export default QueroTrabalhar;