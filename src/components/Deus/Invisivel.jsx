import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Invisivel = () => {
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
        <h3>DEUS é invisível</h3>
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
            Por DEUS ser espírito, Ele é também invisível.{" "}
            <q>Ninguém jamais viu a Deus</q> (
            <span onClick={() => abrirModal(deus[44])}>João 1:18</span>).
            Ninguém jamais será capaz de ver a essência total de DEUS ou o todo
            de seu ser espiritual.
          </p>
          <p>
            A Bíblia, todavia, registra passagens nas quais o povo observou
            manisfestações exteriores de DEUS. Isaías nos diz que ele viu{" "}
            <q>o Senhor assentado sobre um trono alto e exaltado</q> (
            <span onClick={() => abrirModal(deus[45])}>Isaías 6:1</span>).{" "}
            <q>O Senhor apareceu a Abraão perto dos carvalhos de Manre</q> (
            <span onClick={() => abrirModal(deus[46])}>Gênesis 18:1</span>). E
            Jacó diz: <q>Vi Deus face a face</q> (
            <span onClick={() => abrirModal(deus[47])}>Gênesis 32:30</span>).
            Nesses e em outros exemplos similares, DEUS assumiu uma forma
            visível para se mostrar às pessoas. A manifestação suprema visível
            de DEUS é encontrada na pessoa de JESUS CRISTO. Nosso Senhor disse:{" "}
            <q>Quem me vê, vê o Pai</q> (
            <span onClick={() => abrirModal(deus[48])}>João 14:9</span>).
          </p>
          <p>
            Embora ninguém nunca tenha visto a total essência de DEUS, o qual é
            invisível, Ele por vezes preferiu mostrar algo de si mesmo às
            pessoas por meio das coisas criadas e visíveis, especialmente
            mediante JESUS CRISTO.
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Invisivel;
