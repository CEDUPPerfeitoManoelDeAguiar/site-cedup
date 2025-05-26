import React from 'react';
import '../../App.css';
import './style.css'

const FaleConosco = () => {
  return (
    <main>
      <div className="site-content">
        <br />
        <div className="divisões">
          <div className="títulos">
            <h1>Fale conosco</h1>
            <p>Envie sua dúvida ou sugestão.</p>
            <div className="item-contato">
              <br />
              <b>Telefone:</b> (47)3276-9270 | (47)3276-9271
              <br />
              <b>E-mail:</b> cedupguaramirim@sed.sc.gov.br
              <br />
              <br />
              <b>Endereço</b>
              <br />
              BR 280, Km 53, n° 10161
              <br />
              Avaí, Guaramirim/ SC
              <br />
              CEP: 89.270-000
                <br />
                <br />
                <a className="submenu" href="/quero-trabalhar">Trabalhe Conosco</a>   
            </div>
          </div>

          <div className="quadro-contato">
            <form className="cadastro" action="https://formsubmit.co/cedupguaramirim@sed.sc.gov.br" method="POST">
              <div className="field">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required /><br />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" required /><br />
              </div>

              <div className="field">
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" /><br />
              </div>

              <div className="field">
                <label htmlFor="mensagem">Mensagem: </label>
                <textarea id="mensagem" name="mensagem" required></textarea>
              </div>
              <input type="submit" name="acao" value="Enviar" />
              
              <input type="hidden" name="_subject" value="Nova mensagem!" />
              <input type="text" name="_honey" style={{display:'none'}} />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FaleConosco;