import React from 'react';
import './style.css';
import '../../App.css';

const Cardapio = () => {
  return (
    <div className="site">
      <main className="content">
        <article>
          <h1 className="content__title">Cardápio de Junho 2025</h1>

          <div className="cardapio-list">
            <div className="semana-item">
                <input type="checkbox" id="toggle-1" className="expandable-checkbox" />
                <label htmlFor="toggle-1" className="label-semana">
                Semana 1 - 02/06 até 06/06
                </label>
                <div className="tabela-container">
                <table className="tabela">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Dia">02/06</td>
                        <td data-label="Segunda">02/06</td>
                        <td data-label="Terça">03/06</td>
                        <td data-label="Quarta">04/06</td>
                        <td data-label="Quinta">05/06</td>
                        <td data-label="Sexta">06/06</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Manhã</td>
                        <td data-label="Segunda">Sanduíche de queijo (pão integral, manteiga, queijo, cenoura ralada e alface), leite com café, açúcar e uma laranja.</td>
                        <td data-label="Terça">Torta de frango com 50% aveia (com peito de frango desfiado, tomate e abobrinha), suco de uva integral sem açúcar e uma maçã.</td>
                        <td data-label="Quarta">Bolo de cenoura, leite batido com banana, maçã e aveia e uma laranja.</td>
                        <td data-label="Quinta">Pão massinha com carne bovina (moída ensopada com molho de tomate), alface, tomate em fatias, suco de uva integral sem açúcar e uma tangerina.</td>
                        <td data-label="Sexta">Pão doce com farofa, leite com café, açúcar e uma maçã.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Almoço</td>
                        <td data-label="Segunda">Omelete de tomate com queijo e orégano, arroz, feijão, salada de alface e uma fatia de abacaxi.</td>
                        <td data-label="Terça">Carne bovina em cubos ensopada com chuchu e molho de tomate, arroz, feijão, salada de paternária ralada e uma laranja.</td>
                        <td data-label="Quarta">Frango em iscas refogado com batatas e tomate, arroz, feijão, salada de abobrinha e uma banana.</td>
                        <td data-label="Quinta">Carne suína em cubos refogada, arroz, feijão, abóbora refogada com tempero verde, salada de alface, salada de chuchu e uma fatia de mamão.</td>
                        <td data-label="Sexta">Macarronada de carne bovina (macarrão parafuso com carne moída e molho de tomate), salada de cenoura cozida, salada de rúcula e uma tangerina.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Tarde</td>
                        <td data-label="Segunda">Pão integral com manteiga, uma fatia de queijo e tomate em rodelas, suco de uva integral sem açúcar e uma fatia de mamão.</td>
                        <td data-label="Terça">Pão doce liso com doce de banana sem açúcar, leite com café, açúcar e uma maçã.</td>
                        <td data-label="Quarta">Bolo de laranja, leite batido com maçã, aveia e mel e uma banana.</td>
                        <td data-label="Quinta">Iogurte natural batido com banana e mel, biscoito caseiro sem açúcar e canela e uma banana.</td>
                        <td data-label="Sexta">Canjica doce (leite, canjica, açúcar e canela) e uma fatia de mamão.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Noite</td>
                        <td data-label="Segunda">Carreteiro (arroz integral, carne bovina em cubos, tomate, cebola e tempero verde), abóbora refogada, salada de alface e uma laranja.</td>
                        <td data-label="Terça">Frango em iscas acebolado, arroz, feijão, batata refogada com tomate, salada de repolho roxo e uma maçã.</td>
                        <td data-label="Quarta">Feijoada de carne suína com legumes (feijão com carne suína, aipim e chuchu em cubos), arroz, farofa de cenoura ralada e uma banana.</td>
                        <td data-label="Quinta">Polenta com molho de carne moída (carne bovina moída e molho de tomate), arroz, feijão, salada de couve-flor e uma tangerina.</td>
                        <td data-label="Sexta">Canja (arroz, peito de frango desfiado, alho, tomate, cebola, cenoura em cubos, batata em cubos, chuchu em cubos e tempero verde) e duas fatias de pão de sanduíche integral e uma laranja.</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div className="semana-item">
                <input type="checkbox" id="toggle-2" className="expandable-checkbox" />
                <label htmlFor="toggle-2" className="label-semana">
                Semana 2 - 09/06 até 13/06
                </label>
                <div className="tabela-container">
                <table className="tabela">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Dia">09/06</td>
                        <td data-label="Segunda">09/06</td>
                        <td data-label="Terça">10/06</td>
                        <td data-label="Quarta">11/06</td>
                        <td data-label="Quinta">12/06</td>
                        <td data-label="Sexta">13/06</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Manhã</td>
                        <td data-label="Segunda">Pão integral com omelete de cenoura, alface, tomate, suco de laranja integral sem açúcar e uma maçã.</td>
                        <td data-label="Terça">Bolo de limão mesclado com chocolate (50% farinha integral), leite com café, açúcar e uma tangerina.</td>
                        <td data-label="Quarta">Torta de frango (com peito de frango desfiado, tomate, cenoura ralada, cebola e tempero verde), suco de uva integral sem açúcar e uma maçã.</td>
                        <td data-label="Quinta">Sanduíche de queijo (pão integral, manteiga, queijo, alface, tomate e arcaça), leite com café, açúcar e uma tangerina.</td>
                        <td data-label="Sexta">Pão massinha com peito de frango desfiado ao molho de tomate, alface, tomate, suco de uva integral sem açúcar e uma banana.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Almoço</td>
                        <td data-label="Segunda">Estrogonofe de carne bovina em iscas com molho branco, arroz integral, batata doce assada, salada de alface, salada de abóbora e uma laranja.</td>
                        <td data-label="Terça">Frango (coxa e sobrecoxa sem osso) ensopado com ervilha congelada e tomate, arroz, feijão, salada bicolor (repolho roxo e branco) e uma maçã.</td>
                        <td data-label="Quarta">Carne suína em iscas acebolada, arroz, feijão, farofa de cenoura, salada de couve, salada de abobrinha e uma fatia de mamão.</td>
                        <td data-label="Quinta">Frango em iscas acebolado, arroz, feijão, legumes refogado (cenoura e vagem), salada de beterraba cozida e uma fatia de mamão.</td>
                        <td data-label="Sexta">Carreteiro (arroz integral, carne bovina em iscas, tomate e cebola), feijão, repolho refogado com tomate, salada de rúcula e uma laranja.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Tarde</td>
                        <td data-label="Segunda">Mingau de chocolate (leite, amido de milho, cacau em pó 100% e açúcar), biscoito caseiro sem gordura trans e uma banana.</td>
                        <td data-label="Terça">Quibe assado (triguilho, carne moída, tomate em cubos, cebola, alho, tempero verde e cenoura ralada), suco de laranja integral sem açúcar e uma fatia de mamão.</td>
                        <td data-label="Quarta">Bolo de fubá, suco de uva integral sem açúcar e uma tangerina.</td>
                        <td data-label="Quinta">Salada de frutas (mamão, laranja e maçã), aveia e iogurte natural batido com mel e biscoito caseiro sem gordura trans.</td>
                        <td data-label="Sexta">Leite com café, açúcar, biscoito caseiro sem gordura trans e uma fatia de mamão.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Noite</td>
                        <td data-label="Segunda">Arroz colorido de frango (arroz integral, peito de frango desfiado, abobrinha, cenoura, cebola e tempero verde), feijão, salada de alface e uma maçã.</td>
                        <td data-label="Terça">Omelete de cenoura com queijo e orégano, arroz, feijão, chuchu refogado com tempero verde, salada de paternária ralada e uma banana.</td>
                        <td data-label="Quarta">Frango ensopado (coxa e sobrecoxa) sem osso com molho de tomate e batata inglesa, arroz, feijão, legumes refogado (couve-flor e abobrinha), salada de rúcula e uma fatia de mamão.</td>
                        <td data-label="Quinta">Minestra de feijão com macarrão (macarrão para sopa, carne bovina em cubos, feijão roxo, batata salsa, abóbora, cebola, alho, tempero verde), duas fatias de pão de sanduíche integral e uma tangerina.</td>
                        <td data-label="Sexta">Pão massinha com peito de frango desfiado ao molho de tomate, alface, tomate, suco de uva integral sem açúcar e uma banana.</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div className="semana-item">
                <input type="checkbox" id="toggle-3" className="expandable-checkbox" />
                <label htmlFor="toggle-3" className="label-semana">
                Semana 3 - 16/06 até 20/06
                </label>
                <div className="tabela-container">
                <table className="tabela">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Dia">16/06</td>
                        <td data-label="Segunda">16/06</td>
                        <td data-label="Terça">17/06</td>
                        <td data-label="Quarta">18/06</td>
                        <td data-label="Quinta">19/06</td>
                        <td data-label="Sexta">20/06</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Manhã</td>
                        <td data-label="Segunda">Pão integral com doce de morango sem açúcar, uma fatia de queijo muçarela, leite com café, açúcar e uma fatia de abacaxi.</td>
                        <td data-label="Terça">Bolo de maçã (50% farinha de trigo integral), leite com café, açúcar e uma laranja.</td>
                        <td data-label="Quarta">Cuca de banana com aveia e canela, leite com café, açúcar e uma maçã.</td>
                        <td data-label="Quinta">Leite batido com maçã e aveia, biscoito caseiro sem gordura trans e uma laranja.</td>
                        <td data-label="Sexta">Bolo de cenoura nutritivo (cenoura, maçã, aveia e farinha de trigo integral), leite com café, açúcar e uma banana.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Almoço</td>
                        <td data-label="Segunda">Arroz colorido com carne (arroz integral, carne bovina moída, brócolis e ervilha congelada), feijão, salada de beterraba ralada e uma maçã.</td>
                        <td data-label="Terça">Frango (coxa e sobrecoxa sem osso) ensopado com aipim e tomate, arroz, feijão, salada de cenoura ralada e uma banana.</td>
                        <td data-label="Quarta">Carne bovina em iscas acebolada, arroz, feijão vermelho, chuchu refogado, salada de couve e uma fatia de mamão.</td>
                        <td data-label="Quinta">Polenta com frango (polenta, frango desfiado e molho de tomate), arroz, feijão, salada de alface, salada de abobrinha e uma maçã.</td>
                        <td data-label="Sexta">Salada de frutas (laranja, banana e maçã), aveia e iogurte natural batido com mel e biscoito caseiro sem gordura trans.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Tarde</td>
                        <td data-label="Segunda">Pão massinha com omelete de espinafre com queijo e esfregão, alface, tomate, suco de uva integral sem açúcar e uma tangerina.</td>
                        <td data-label="Terça">Quibe assado (triguilho, carne moída, tomate em cubos, cebola, alho, tempero verde e cenoura ralada), suco de uva integral sem açúcar e uma banana.</td>
                        <td data-label="Quarta">Bolo de cenoura nutritivo (cenoura, maçã, aveia e farinha de trigo integral), leite com café, açúcar e uma banana.</td>
                        <td data-label="Quinta">Salada de frutas (laranja, banana e maçã), aveia e iogurte natural batido com mel e biscoito caseiro sem gordura trans.</td>
                        <td data-label="Sexta">Pão massinha com omelete de espinafre com queijo e esfregão, alface, tomate, suco de uva integral sem açúcar e uma tangerina.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Noite</td>
                        <td data-label="Segunda">Macarronada de carne suína (macarrão gratinado com molho de tomate, carne suína em cubos acebolada), salada de alface, salada de abóbora e uma laranja.</td>
                        <td data-label="Terça">Carne bovina moída ensopada com abóbora assada, chuchu e tomate, arroz, feijão, salada de repolho e uma maçã.</td>
                        <td data-label="Quarta">Frango em cubos acebolado, arroz, feijão, legumes refogados (berinjela, abobrinha e tomate), salada de rúcula e uma banana.</td>
                        <td data-label="Quinta">Omelete de espinafre com queijo e esfregão, arroz, feijão, cenoura refogada, salada de alface e uma laranja.</td>
                        <td data-label="Sexta">Quibe assado (triguilho, carne moída, tomate em cubos, cebola, alho, tempero verde e cenoura ralada), suco de uva integral sem açúcar e uma banana.</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div className="semana-item">
                <input type="checkbox" id="toggle-4" className="expandable-checkbox" />
                <label htmlFor="toggle-4" className="label-semana">
                Semana 4 - 23/06 até 27/06
                </label>
                <div className="tabela-container">
                <table className="tabela">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Dia">23/06</td>
                        <td data-label="Segunda">23/06</td>
                        <td data-label="Terça">24/06</td>
                        <td data-label="Quarta">25/06</td>
                        <td data-label="Quinta">26/06</td>
                        <td data-label="Sexta">27/06</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Manhã</td>
                        <td data-label="Segunda">Pão integral com doce de banana sem açúcar, uma fatia de queijo muçarela, leite com café, açúcar e uma laranja.</td>
                        <td data-label="Terça">Bolo de maracujá mesclado com chocolate (50% farinha integral), leite com café, açúcar e uma banana.</td>
                        <td data-label="Quarta">Pão integral com manteiga, uma fatia de queijo e tomate em rodelas, suco de uva integral sem açúcar e uma fatia de mamão.</td>
                        <td data-label="Quinta">Leite batido com banana e aveia, biscoito caseiro sem gordura trans e uma maçã.</td>
                        <td data-label="Sexta">Bolo de limão, leite com café, açúcar e uma tangerina.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Almoço</td>
                        <td data-label="Segunda">Carne bovina em cubos ensopada com molho de tomate, arroz, feijão, batata assada, salada de rúcula e uma maçã.</td>
                        <td data-label="Terça">Macarronada de frango (macarrão penne com frango desfiado e cenoura ralada ensopado com molho de tomate), salada de alface, salada de abobrinha e uma laranja.</td>
                        <td data-label="Quarta">Carne bovina em iscas acebolada, arroz, feijão, abóbora refogada com tempero verde, salada de rúcula e uma fatia de abacaxi.</td>
                        <td data-label="Quinta">Frango assado (coxa e sobrecoxa sem osso), arroz, feijão, batata refogada, salada de agrião, salada de couve-flor e uma fatia de mamão.</td>
                        <td data-label="Sexta">Omelete de espinafre com queijo e orégano, arroz, feijão, salada de rúcula e uma banana.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Tarde</td>
                        <td data-label="Segunda">Salada de frutas (mamão, banana e laranja), aveia, iogurte natural batido com mel e biscoito caseiro sem gordura trans.</td>
                        <td data-label="Terça">Arroz doce (leite, arroz, açúcar e canela) e uma maçã.</td>
                        <td data-label="Quarta">Cuca de maçã com aveia e canela, leite batido com mamão e uma banana.</td>
                        <td data-label="Quinta">Pão massinha com carne moída refogada com molho de tomate, alface, cenoura ralada, suco de uva integral sem açúcar e uma laranja.</td>
                        <td data-label="Sexta">Torta de carne (com carne bovina moída, tomate, abobrinha em cubos pequenos, cebola, tempero verde), suco de maçã sem açúcar e uma tangerina.</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Noite</td>
                        <td data-label="Segunda">Risoto de frango (arroz integral com peito de frango desfiado, cenoura ralada e molho de tomate), abobrinha refogada, salada de alface e uma laranja.</td>
                        <td data-label="Terça">Sopa de legumes (macarrão para sopa, carne bovina em cubos, inhame, chuchu, cenoura, cebola, alho, tempero verde), duas fatias de pão de sanduíche integral e uma maçã.</td>
                        <td data-label="Quarta">Frango ensopado (coxa e sobrecoxa) sem osso com chuchu e molho de tomate, arroz integral, feijão, salada de beterraba ralada e uma tangerina.</td>
                        <td data-label="Quinta">Carne bovina em cubos refogada com aipim, arroz, feijão, paçoca de pinhas (pinhas, farinha de mandioca, cenoura ralada, cebola e tempero verde), salada de rúcula e uma banana.</td>
                        <td data-label="Sexta">Frango em cubos refogado com molho de tomate, arroz, feijão, farofa de abobrinha, salada de alface com tomate em fatias e uma maçã.</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div className="semana-item">
                <input type="checkbox" id="toggle-5" className="expandable-checkbox" />
                <label htmlFor="toggle-5" className="label-semana">
                Semana 5 - 30/06
                </label>
                <div className="tabela-container">
                <table className="tabela">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Dia">30/06</td>
                        <td data-label="Segunda">30/06</td>
                        <td data-label="Terça">-</td>
                        <td data-label="Quarta">-</td>
                        <td data-label="Quinta">-</td>
                        <td data-label="Sexta">-</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Manhã</td>
                        <td data-label="Segunda">Sanduíche de queijo (pão integral, manteiga, queijo muçarela, cenoura ralada e alface), leite com café, açúcar e uma maçã.</td>
                        <td data-label="Terça">-</td>
                        <td data-label="Quarta">-</td>
                        <td data-label="Quinta">-</td>
                        <td data-label="Sexta">-</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Almoço</td>
                        <td data-label="Segunda">Arroz colorido com frango (arroz integral, frango desfiado, milho verde cozido e cenoura), feijão, salada de alface com tomate e uma banana.</td>
                        <td data-label="Terça">-</td>
                        <td data-label="Quarta">-</td>
                        <td data-label="Quinta">-</td>
                        <td data-label="Sexta">-</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Tarde</td>
                        <td data-label="Segunda">Iogurte natural batido com maçã e mel, biscoito caseiro sem gordura trans e uma laranja.</td>
                        <td data-label="Terça">-</td>
                        <td data-label="Quarta">-</td>
                        <td data-label="Quinta">-</td>
                        <td data-label="Sexta">-</td>
                    </tr>
                    <tr>
                        <td data-label="Refeição">Noite</td>
                        <td data-label="Segunda">Estrogonofe de peito de frango em iscas com molho branco, arroz integral, batata doce assada, salada de alface com cenoura ralada e uma maçã.</td>
                        <td data-label="Terça">-</td>
                        <td data-label="Quarta">-</td>
                        <td data-label="Quinta">-</td>
                        <td data-label="Sexta">-</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Cardapio;