import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Bom = () => {
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
        <h3>DEUS é bom</h3>
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
            JESUS disse{" "}
            <q>não há ninguém que seja bom, a não ser somente Deus</q> (
            <span onClick={() => abrirModal(deus[64])}>Lucas 18:19</span>).
            Então, DEUS é o padrão supremo da verdade; tudo o que Ele é e faz é
            bom e digno de apreciação. Não há padrão mais elevado de bondade do
            que o próprio caráter de DEUS e sua aprovação a tudo o que seja
            coerente com esse caráter. Por exemplo, sua bondade e aprovação da
            bondade em si são vistas na própria criação:{" "}
            <q>
              E Deus viu tudo o que havia feito, e tudo havia ficado muito bom
            </q>{" "}
            (<span onClick={() => abrirModal(deus[65])}>Gênesis 1:31</span>).
          </p>
          <p>
            Pelo fato de DEUS corresponder ao supremo padrão de bondade, Ele
            também constitui a fonte de toda bondade. Tiago nos diz:{" "}
            <q>
              Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai
              das luzes
            </q>{" "}
            (<span onClick={() => abrirModal(deus[66])}>Tiago 1:17</span>). DEUS
            é aquele que concede boas dádivas a seus filhos e promete não negar
            qualquer coisa boa àqueles <q>que vivem com integridade</q> (
            <span onClick={() => abrirModal(deus[67])}>Salmos 84:11</span>).
            JESUS confirma isso quando diz que DEUS{" "}
            <q>dará coisas boas aos que lhe pedirem</q> (
            <span onClick={() => abrirModal(deus[68])}>Mateus 7:11</span>). Até
            mesmo sua disciplina é manifestação de bondade e amor (
            <span onClick={() => abrirModal(deus[69])}>Hebreus 12:10</span>).
            Logo, toda a bondade que procuramos é encontrada potencializada no
            próprio DEUS. O salmista percebeu isso quando escreveu:{" "}
            <q>Nada mais desejo além de estar junto a ti</q> (
            <span onClick={() => abrirModal(deus[70])}>Salmos 73:25</span>).
          </p>
          <p>
            A bondade de DEUS pode frequentemente ser vista em sua misericórdia
            e graça: sua misericórdia consiste na bondade para com aqueles em
            estado de miséria e angústia, ao passo que sua graça consiste na
            bondade para com aqueles que merecem tão somente punições. Os que
            recebem a bondade de DEUS - muitas vezes recebida por meio da sua
            misericórdia e graça - são chamados a demonstrá-la aos outros. Como
            diz Paulo em{" "}
            <span onClick={() => abrirModal(deus[71])}>Gálatas 6:10</span>:{" "}
            <q>
              Portanto, enquanto temos oportunidade, façamos o bem a todos,
              especialmente aos da família da fé.
            </q>
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Bom;
