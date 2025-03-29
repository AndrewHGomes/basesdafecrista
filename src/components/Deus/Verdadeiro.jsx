import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Verdadeiro = () => {
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
        <h3>DEUS é verdadeiro</h3>
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
            <q>Mas o Senhor é o Deus verdadeiro</q> (
            <span onClick={() => abrirModal(deus[62])}>Jeremias 10:10</span>
            ). Todo o seu conhecimento e todas as suas palavras são verdadeiras
            e padrão final de verdade. Uma vez eu Ele diga algo, podemos contar
            que Ele o cumprirá; podemos contar com o Senhor por ser Ele sempre
            fiel a suas promessas (
            <span onClick={() => abrirModal(deus[24])}>Números 23:19</span>). Na
            verdade, a essência da fé verdadeira é pegar DEUS em sua palavra e
            contar com Ele porque fará conforme prometeu.
          </p>
          <p>
            Podemos imitar a veracidade de DEUS, em parte, esforçando-nos para
            ter o conhecimento verdadeiro sobre Ele e sua Palavra. Também
            podemos imitá-lo sendo fiéis naquilo que dizemos e fazemos (
            <span onClick={() => abrirModal(deus[63])}>Colossenses 3:9-10</span>
            ).
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Verdadeiro;
