import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Independente = () => {
  const [ativo, setAtivo] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [versoSelecionado, setVersoSelecionado] = useState(null);

  const ativar = () => {
    setAtivo(!ativo);
  };

  const abrirModal = (versiculo) => {
    setVersoSelecionado(versiculo);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <article>
      <div className="titulo">
        <h3>DEUS é independente</h3>
        <Button onClick={ativar} estado={ativo ? "Fechar" : "Abrir"} />
      </div>
      {ativo && (
        <div className="subtopico">
          {modalAberto && (
            <Modal
              modal={modalAberto}
              fecharModal={fecharModal}
              versiculo={versoSelecionado}
            />
          )}
          <p>
            A independência de DEUS significa dizer que Ele, de fato, não
            precisa de nós ou de nada mais na criação para o que quer que seja.
            Ele não nos criou porque estava solitário ou necessitado de
            companhia de outras pessoas. A existência pessoal de DEUS sempre foi
            perfeita, completa e satisfatóriamente feliz em si. Paulo diz, em{" "}
            <span onClick={() => abrirModal(deus[15])}>Atos 17:24-25</span>:{" "}
            <q>
              O Deus que fez o mundo e tudo que nele há [...] não habita em
              santuários feitos por mãos de homens. Ele não é servido por mãos
              de homens como se necessitasse de algo, porque ele mesmo dá a
              todos a vida, o fôlego e as demais coisas
            </q>
            .
          </p>
          <p>
            DEUS sempre existiu. Ele não foi criado; Ele nunca passou a existir.
            O salmista escreve:{" "}
            <q>
              Antes de nascerem os montes e de criares a terra e o mundo, de
              enternidade a eternidade tu és Deus
            </q>{" "}
            (<span onClick={() => abrirModal(deus[16])}>Salmos 90:2</span>). Por
            isso, DEUS não é dependente de ninguém ou de coisa alguma. De fato,
            por ser DEUS, Ele não pode ser dependente de ninguém e de coisa
            alguma. Em vez disso, toda a sua criação é e precisa ser dependente
            Dele, <q>pois dele e para ele são todas as coisas</q> (
            <span onClick={() => abrirModal(deus[17])}>Romanos 11:36</span>).
          </p>
          <p>
            Entretanto, embora DEUS seja completamente independente, Ele também
            escolhe dar-nos valor e significado. Ele nos permite ser importantes
            para Ele! Na verdade, toda a criação o glorifica e lhe traz alegria.
            Como Ele diz em{" "}
            <span onClick={() => abrirModal(deus[14])}>Isaías 43:7</span>:{" "}
            <q>
              Todo o que é chamado pelo meu nome [...] a quem criei para minha
              glória
            </q>
            . E Sofonias diz que DEUS{" "}
            <q>se regozijará em você com brados de alegria</q> (
            <span onClick={() => abrirModal(deus[18])}>Sofonias 3:17</span>).
            Embora DEUS não precise de nós, Ele nos permite levar alegria a seu
            coração, alegria que resulta em alto louvor! Isso é um sinal de
            verdadeiro significado.
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Independente;
