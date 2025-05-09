import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Eterno = () => {
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
        <h3>DEUS é eterno</h3>
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
            DEUS, sendo eterno, não tem início nem fim ou secessão de eventos em
            seu próprio ser. Isso é afirmado em{" "}
            <span onClick={() => abrirModal(deus[16])}>Salmos 90:2</span>:{" "}
            <q>
              Antes de nascerem os montes e de criares a terra e o mundo, de
              eternidade a eternidade tu és Deus
            </q>
            . Ele estava trabalhando <q>antes da fundação do mundo</q> (
            <span onClick={() => abrirModal(deus[29])}>Efésios 1:4</span>). Ele
            sempre existiu. Ele é o primeiro e o último, o começo e o fim,{" "}
            <q>o alfa e o ômega [..] o que era e o que há de vir</q> (
            <span onClick={() => abrirModal(deus[30])}>Apocalipse 1:8</span>).
            Judas nos diz que <q>glória, majestade, poder e autoridade</q> já
            eram de DEUS
            <q>antes de todos os tempos</q>, bem como{" "}
            <q>agora e para todo o sempre</q> (
            <span onClick={() => abrirModal(deus[31])}>Judas 1:25</span>).
          </p>
          <p>
            Em razão de DEUS ser eterno, sua visão do tempo é radicalmente
            diferente da nossa. Por exemplo, <q>mil anos</q> são para Ele{" "}
            <q>como o dia de ontem que passou, como as horas da noite</q> (
            <span onClick={() => abrirModal(deus[32])}>Salmos 90:4</span>).
            Assim, toda a história passada é, para DEUS, como se tivesse
            acontecido há pouco. Pedro afirma isso ao dizer que{" "}
            <q>um dia é como mil anos</q>. (
            <span onClick={() => abrirModal(deus[33])}>2ªPedro 3:8</span>). Mas
            o apóstolo também nos diz que para o Senhor{" "}
            <q>mil anos é como um dia</q> (
            <span onClick={() => abrirModal(deus[33])}>2ªPedro 3:8</span>).
          </p>
          <p>
            Em conjunto, essas perspectivas nos permitem saber que DEUS vê todo
            o período da história tão vividamente como se fosse um breve evento
            que acabou de acontecer. Mas também vê um breve evento como se fosse
            durar para sempre. DEUS vê e conhece todos os eventos - passado,
            presente e futuro - com igual intensidade. Embora Ele não se
            comporte de acordo com nenhuma sucessão de movimentos, ainda vê a
            progressão de eventos em diferentes pontos do tempo. E como aquele
            que criou e governa sobre o tempo, DEUS usa o tempo para seus
            próprios propósitos.
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Eterno;
