import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Onipresente = () => {
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
        <h3>DEUS é onipresente</h3>
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
            Assim como DEUS é ilimitado e relação ao tempo, também é infinito
            com relação ao espaço. Ele é onipresente. DEUS não tem tamanho ou
            dimensões espaciais e está presente em todos os pontos do espaço com
            todo o seu ser. Ele não pode ser limitado pelo espaço material
            porque o criou (
            <span onClick={() => abrirModal(deus[0])}>Gênesis 1:1</span>).
          </p>
          <p>
            DEUS também está presente em todas as partes do espaço; encontra-se
            em toda parte; Ele enche o céu e enche a terra (
            <span onClick={() => abrirModal(deus[34])}>Jeremias 23:23-24</span>
            ). Como Davi escreve:{" "}
            <q>
              Para onde poderia eu escapar do teu Espírito? Para onde poderia
              fugir da tua presença? Se eu subir aos céus, lá estás; se eu fizer
              a minha cama na sepultura, também lá estás. Se eu subir com as
              asas da alvorada e morar na extremidade do mar, mesmo ali a tua
              mão direita me guiará e me susterá
            </q>{" "}
            (<span onClick={() => abrirModal(deus[35])}>Salmos 139:7-10</span>).
            DEUS está presente em todas as partes do espaço, mas seu ser é tal
            que até{" "}
            <q>os céus, mesmo os mais altos céus, não podem conter-te</q> (
            <span onClick={() => abrirModal(deus[36])}>1ªReis 8:27</span>).
          </p>
          <p>
            A despeito de DEUS estar presente em toda parte, acha-se presente e
            age de modos diferentes em diferentes lugares. Frequentemente, DEUS
            está presente para abençoar, conforme descreve no{" "}
            <span onClick={() => abrirModal(deus[37])}>Salmo 16:11</span>:{" "}
            <q>
              Tu me farás conhecer a vereda da vida, a alegria plena de tua
              presença, o eterno prazer à tua direita
            </q>
            . Em outras vezes em lugares como o inferno, por exemplo, DEUS está
            presente não para conceder qualquer benção, mas apenas para punir e,
            desse modo, manifestar sua justiça (
            <span onClick={() => abrirModal(deus[38])}>Amós 9:1-4</span>).
          </p>
          <p>
            Às vezes DEUS está presente não para punir nem para abençoar, mas
            para manter o Universo em existência e funcionando do modo que Ele
            deseja. Em Cristo, <q>tudo subsiste</q> (
            <span onClick={() => abrirModal(deus[39])}>Colossenses 1:17</span>).
            JESUS está continuamente{" "}
            <q>sustentando todas as coisas por sua palavra poderosa</q> (
            <span onClick={() => abrirModal(deus[40])}>Hebreus 1:3</span>).
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Onipresente;
