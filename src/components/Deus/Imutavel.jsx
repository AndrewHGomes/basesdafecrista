import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Imutavel = () => {
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
        <h3>DEUS é imutável</h3>
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
            DEUS é imutável, mas não de todas as meneiras que possamos pensar
            que Ele seja. Em vez disso, Ele é imutável apenas nas maneiras pelas
            quais as Escrituras nos dizem que Ele é imutável: DEUS é imutável em
            seu ser, atributos, propósitos e promessas. O salmista louva a DEUS
            por Ele permanecer o mesmo (
            <span onClick={() => abrirModal(deus[19])}>Salmos 102:27</span>).
            DEUS afirma isso quando, em referência a seus atributos, diz que não
            muda: <q>De fato eu, o Senhor, não mudo</q> (
            <span onClick={() => abrirModal(deus[20])}>Malaquias 3:6</span>).
            Enquanto DEUS permanece o mesmo em seu ser e seus atributos, isso
            está em direta contradição conosco. Nosso ser muda, e nossos
            atributos também. DEUS, por outro lado, permanecerá sempre o mesmo.
          </p>
          <p>
            Além disso, DEUS é imutável em seus propósitos. Uma vez que Ele
            determine que fará algo, aquilo será feito. Pois{" "}
            <q>
              os planos do Senhor permanecem para sempre, os propósitos do seu
              coração por todas as gerações
            </q>{" "}
            (<span onClick={() => abrirModal(deus[21])}>Salmos 33:11</span>).
            Seus planos para a eternidade (como aqueles encontrados em{" "}
            <span onClick={() => abrirModal(deus[22])}>Mateus 25:34</span> e{" "}
            <span onClick={() => abrirModal(deus[23])}>Efésios 1:4-11</span>) de
            fato acontecerão.
          </p>
          <p>
            DEUS também é imutável em suas promessas. Como está escrito em{" "}
            <span onClick={() => abrirModal(deus[24])}>Números 23:19</span>:{" "}
            <q>
              Deus não é homem para que minta, nem filho de homem para que se
              arrependa. Acaso ele fala e deixa de agir? Acaso ele promete e
              deixa de cumprir?
            </q>
          </p>
          <p>
            Ainda assim, há partes na Escritura que parecem, à primeira vista,
            contradizer a imutabilidade divina, especialmente as relacionadas a
            seus propósitos e promessas. Por exemplo, DEUS não castigou Nínive
            como prometido quando o povo se arrependeu (
            <span onClick={() => abrirModal(deus[25])}>Jonas 3:4-10</span>, para
            outros exemplos ver{" "}
            <span onClick={() => abrirModal(deus[26])}>Êxodo 32:9-14</span> e{" "}
            <span onClick={() => abrirModal(deus[27])}>Isaías 38:1-6</span>).
            Mas esses casos devem ser entendidos como reais expressões da
            atitude presente de DEUS ou intenção referente a uma situação
            específica. Na medida em que a situação muda, a atitude ou expressão
            da intenção divina também se altera.
          </p>
          <p>
            A imutabilidade de DEUS não significa que Ele não agirá nem ficará
            indiferente em resposta a uma situação diferente (pois Ele
            dificilmente seria bom ou justo se não respondesse de maneira
            diferente ao pecado, do que em face ao arrependimento e justiça). A
            imutabilidade não significa que DEUS não age ou sente emoções. De
            fato, uma das maneiras pelas quais DEUS demonstra que é{" "}
            <q>Deus e não homem</q> é por não executar sua <q>ira ardente</q> e
            destruir um povo; em vez disso, seu{" "}
            <q>coração está enternecido e despertou-se toda a sua compaixão</q>.
            DEUS retém seu julgamento e afirma:{" "}
            <q>Não executarei a minha ira impetuosa</q> (
            <span onClick={() => abrirModal(deus[28])}>Oseias 11:8-9</span>).
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Imutavel;
