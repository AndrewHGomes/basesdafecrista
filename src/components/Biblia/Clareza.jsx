import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import biblia from "../../dados/biblia.json";

const Clareza = () => {
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
        <h3>Clareza</h3>
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
            À medida que lemos a Escritura e procuramos entendê-la, descobrimos
            que algumas passagens são mais fáceis de entender do que outras.
            Embora determinados versículos possam, de início, parecer mais
            difíceis de compreender, a Bíblia foi escrita de tal maneira que
            todas as coisas necessárias para alguém se tornar um cristão, viver
            como um cristão e desenvolver-se como um cristão estão claras.
          </p>
          <p>
            Existem alguns mistérios na Escritura, mas eles não deveriam nos
            oprimir em sua leitura, pois{" "}
            <q>
              os testemunhos do Senhor são dignos de confiança, e tornam sábios
              os inexperiêntes
            </q>{" "}
            (<span onClick={() => abrirModal(biblia[18])}>Salmos 19:7</span>
            ). E{" "}
            <q>
              a explicação das tuas palavras ilumina e dá discernimento aos
              inexperiêntes
            </q>{" "}
            (<span onClick={() => abrirModal(biblia[19])}>Salmos 119:130</span>
            ). A Palavra de DEUS é tão compreensível e clara que mesmo uma
            pessoa simples (pessoa a quem falta um sadio discernimento) pode se
            tornar sábia por Ela.
          </p>
          <p>
            Como as coisas de DEUS são <q>discernidas espiritualmente</q> (
            <span onClick={() => abrirModal(biblia[20])}>1ªCoríntios 2:14</span>
            ), um bom entendimento das Escrituras é, muitas vezes, mais o
            resultado da condição espiritual do indivíduo do que de sua
            habilidade entelectual. Frequentemente, a verdade das Escrituras
            parecerá <q>loucura</q> para aqueles que rejeitam os apelos de JESUS
            (
            <span onClick={() => abrirModal(biblia[20])}>1ªCoríntios 2:14</span>
            ).
          </p>
          <p>
            Isso não significa, no entanto, que todo mal-entendido relacionado à
            Bíblia seja devido à condição espiritual de alguém. Há muitos
            crentes que entendem mal alguma parte da Escritura. Muitas vezes, os
            discípulos não entendiam o que JESUS estava lhes falando (
            <span onClick={() => abrirModal(biblia[21])}>Mateus 15:16</span>
            ). Normalemente isso acontecia em razão de seus corações endurecidos
            (<span onClick={() => abrirModal(biblia[22])}>Lucas 24:25</span>
            ); em outras ocasiões isso ocorreu porque eles precisavam esperar
            mais um pouco e ter mais compreesão (
            <span onClick={() => abrirModal(biblia[23])}>João 12:16</span>).
          </p>
          <p>
            Além disso, membros da igreja primitiva nem sempre concordavam sobre
            o significado do que estava registrado na Escritura (
            <span onClick={() => abrirModal(biblia[24])}>Atos 15</span>,{" "}
            <span onClick={() => abrirModal(biblia[25])}>Gálatas 2:11-15</span>)
          </p>
          <p>
            Quando os indivíduos discordam da interpretação apropriada de uma
            passagem da Escritura, o problema não está Nela, pois DEUS dirigiu
            sua preparação para que Ela pudesse ser compreendida. Antes, o
            problema reside em nós. Às vezes, como resultado de nossas falhas,
            não conseguimos entender corretamente o que a Bíblia está
            especificamente ensinando. Mesmo assim, devemos lê-la com oração,
            pedindo ao Senhor que nos revele a verdade de suas palavras.
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Clareza;
