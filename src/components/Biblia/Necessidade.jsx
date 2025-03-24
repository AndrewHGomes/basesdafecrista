import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import biblia from "../../dados/biblia.json";

const Necessidade = () => {
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
        <h3>Necessidade</h3>
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
            Não é apenas verdade que todas as coisas necessárias para se tornar
            um cristão, viver como um cristão e crescer como um cristão estão
            claramente apresentadas na Bíblia. Também é verdade que, sem a
            Bíblia, não poderíamos conhecer essas coisas. A necessidade da
            Escritura significa que é preciso ler a Bíblia ou ter alguém que nos
            diga o que Nela se encontra para conhecer a DEUS pessoalmente, obter
            perdão de nossos pecados e saber com certeza o que Ele quer que
            façamos.
          </p>
          <p>
            Paulo sugere isso quando pergunta como alguém pode se tornar um
            cristão <q>se não houver quem pregue</q> (
            <span onClick={() => abrirModal(biblia[26])}>Romanos 10:14</span>
            ). Pois
            <q>
              a fé vem por se ouvir a mensagem, e a mensagem é ouvida mediante a
              palavra de Cristo
            </q>{" "}
            (<span onClick={() => abrirModal(biblia[27])}>Romanos 10:17</span>
            ). Se não houver ninguém pregando a palavra de Cristo, diz Paulo, as
            pessoas não poderão ser salvas, e essa palavra vem da Escritura.
            Então, afim de saber como se tornar um cristão, normalmente é
            preciso ler sobre o assunto na Bíblia ou ter acesso a alguém que
            explique o que a Bíblia ensina. Como Paulo disse a Timóteo,{" "}
            <q>
              as sagradas letras [... ] são capazes de torná-lo sábio para a
              salvação mediante a fé em Cristo Jesus
            </q>{" "}
            (<span onClick={() => abrirModal(biblia[28])}>2ªTimóteo 3:15</span>
            ).
          </p>
          <p>
            Contudo, a vida do cristão não começa apenas na Bíblia, mas também
            florece por meio da Bíblia. JESUS disse em{" "}
            <span onClick={() => abrirModal(biblia[29])}>Mateus 4:4</span>:{" "}
            <q>
              Nem só de pão viverá o homem, mas de toda palavra que procede da
              boca de Deus.
            </q>{" "}
            Assim como nossa vida física é mantida pela ingestão diária de
            alimento físico, a vida espiritual é sustentada pela Palavra de
            DEUS. Sendo assim, negligenciar a leitura regular da Bíblia é
            prejudicial à saúde de nossas almas.
          </p>
          <p>
            Além disso, a Bíblia é única fonte de claras e definitivas
            declarações sobre a vontade de DEUS. Conquanto DEUS não tenha
            revelado todos os aspectos de seu querer a nós -{" "}
            <q>pois as coisas encobertas pertencem ao Senhor, o nosso Deus</q>{" "}
            -, há muitos aspectos de sua vontade revelados a nós por intermédio
            da Escritura - <q>para que sigamos todas as palavras desta lei</q> (
            <span onClick={() => abrirModal(biblia[30])}>
              Deutoronômio 29:29
            </span>
            ). O amor por DEUS é demonstrado ao
            <q>guardar seus mandamentos</q> (
            <span onClick={() => abrirModal(biblia[31])}>1ªJoão 5:3</span>), e
            seus mandamentos são encontrados nas páginas da Escritura.
          </p>
          <p>
            Embora a Bíblia seja necessária para muitas coisas, não o é para
            aprendermos algumas lições sobre DEUS, seu caráter e suas leis
            morais, pois{" "}
            <q>
              os céus declaram a glória de Deus; o firmamento proclama a obra de
              suas mãos
            </q>{" "}
            (<span onClick={() => abrirModal(biblia[32])}>Salmos 19:1</span>
            ). Paulo diz que, mesmo para os ímpios,{" "}
            <q>
              o que de Deus se pode conhecer é manifesto entre eles, porque Deus
              lhes manifestou
            </q>{" "}
            (<span onClick={() => abrirModal(biblia[33])}>Romanos 1:19</span>
            ). Não apenas os ímpios sabem da existência de DEUS e sobre Ele, mas
            também têm em suas mentes e consciências um certo entendimento
            acerca de suas leis morais (
            <span onClick={() => abrirModal(biblia[34])}>Romanos 1:32</span>;{" "}
            <span onClick={() => abrirModal(biblia[35])}>2:14-15</span>).
          </p>
          <p>
            Por conseguinte, essa <q>revelação geral</q> sobre a existência de
            DEUS, seu caráter e a lei moral é concedida a todas as pessoas,
            sendo perceptível por intermédio da natureza, das obras históricas
            do Senhor e no senso interior que DEUS colocou em todos. É chamada{" "}
            <q>revelação geral</q>, porque é aberta a todas as pessoas. É
            distinta daquela que é proporcionada pela Bíblia. Em contrapartida,{" "}
            <q>a revelação especial</q> é aquela que DEUS dedica a pessoas
            específicas. Toda a Bíblia consiste em uma revelação especial, assim
            como as mensagens diretas de DEUS para os profetas e para outros
            indivíduos, conforme registrado nas histórias da Bíblia.
          </p>
        </div>
      )}
    </article>
  );
};

export default Necessidade;
