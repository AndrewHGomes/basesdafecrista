import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import biblia from "../../dados/biblia.json";

const Autoridade = () => {
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
        <h3>Autoridade</h3>
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
            Todas as palavras da Bíblia são palvras de DEUS. Portanto, não crer
            nelas ou desobedecê-las é não crer em DEUS ou desobedecê-lo. Com
            muita frequência, as palavras do Antigo Testamento são apresentadas
            pela frase: <q>Assim diz o Senhor</q> (
            <span onClick={() => abrirModal(biblia[0])}>Êxodo 4:22</span>,{" "}
            <span onClick={() => abrirModal(biblia[1])}>Josué 24:2</span>,{" "}
            <span onClick={() => abrirModal(biblia[2])}>1ªSamuel 10:18</span>,{" "}
            <span onClick={() => abrirModal(biblia[3])}>Isaías 10:24</span>,{" "}
            <span onClick={() => abrirModal(biblia[4])}>
              Deuteronômio 18:18-20
            </span>
            , <span onClick={() => abrirModal(biblia[5])}>Jeremias 1:9</span>
            ). Essa frase, entendida como o mandamento de um rei, indicava que o
            que se seguia deveria ser obedecido sem objeção ou questionamento.
            Até mesmo as palavras no Antigo Testamento não atribuídas a citações
            diretas de DEUS são consideradas palavras Dele. Paulo, em{" "}
            <span onClick={() => abrirModal(biblia[6])}>2ªTimóteo 3:16</span>,
            deixa isso bem claro quando escreve que{" "}
            <q>toda a Escritura é inspirada por DEUS</q>.
          </p>
          <p>
            O novo testamento também afirma que suas palavras também são as
            próprias palavras de DEUS. Em{" "}
            <span onClick={() => abrirModal(biblia[7])}>2ªPedro 3:16</span>, o
            apóstolo se refere a todas as cartas de Paulo como formando um todo
            com as <q>Escrituras</q>. Isso significa que Pedro e a igreja
            primitiva consideravam os escritos como parte da mesma categoria que
            os textos do Antigo Testamento. Por conseguinte, tinham em conta os
            escritos paulinos como as próprias palavras de DEUS.
          </p>
          <p>
            Além disso, Paulo, em{" "}
            <span onClick={() => abrirModal(biblia[8])}>1ªTimóteo 5:18</span>,
            escreve que <q>a Escritura diz</q> duas coisas:{" "}
            <q>Não amordacem o boi enquanto está debulhando o cereal</q> e{" "}
            <q>o trabalhador merece o seu salário</q>. A primeira citação
            referente a um boi procede do Antigo Testamento; ela é encontrada em{" "}
            <span onClick={() => abrirModal(biblia[9])}>Deuteronômio 25:4</span>
            . A segunda vem do Novo Testamento e é encontrada em{" "}
            <span onClick={() => abrirModal(biblia[10])}>Lucas 10:7</span>.
          </p>
          <p>
            Paulo, sem hesitação, cita textos tanto do Antigo Testamento quanto
            do Novo Testamento chamando-os de <q>Escrituras</q>. Por isso, as
            palavras do Novo Testamento são consideradas as próprias palavras de
            DEUS. Consequentemente, Paulo podia escrever:{" "}
            <q>o que lhes estou escrevendo é mandamento do Senhor</q> (
            <span onClick={() => abrirModal(biblia[11])}>
              1ªCoríntios 14:37
            </span>
            ).
          </p>
          <p>
            Uma vez que os escritos do Antigo e do Novo Testamento são
            considerados Escritura, é certo dizer que ambos, nas palavras de{" "}
            <span onClick={() => abrirModal(biblia[6])}>2ªTimóteo 3:16</span>,
            são <q>inspirados por DEUS</q>. Isso faz sentido quando consideramos
            a promessa de JESUS de que o ESPÍRITO SANTO <q>faria lembrar</q> os
            discípulos de tudo quanto JESUS lhes havia dito (
            <span onClick={() => abrirModal(biblia[12])}>João 14:26</span>). Foi
            como os discípulos escreveram as palavras inspiradas pelo ESPÍRITO,
            que livros como Mateus, João e 1ª e 2ª Pedro foram escritos.
          </p>
          <p>
            A Bíblia diz que existem <q>várias maneiras</q> (
            <span onClick={() => abrirModal(biblia[13])}>Hebreus 1:1</span>)
            pelas quais suas palavras reais foram escritas. Às vezes, DEUS
            falava diretamente ao autor, que tão somente registrou o que ouviu (
            <span onClick={() => abrirModal(biblia[14])}>
              Apocalipse 2:1-8-12
            </span>
            ). Em outras ocasiões, o autor baseou muitos dos seus escritos em
            entrevistas e pesquisas (
            <span onClick={() => abrirModal(biblia[15])}>Lucas 1:1-3</span>
            ). Em outros momentos, o ESPÍRITO SANTO trouxe à mente coisas que
            JESUS ensinou (
            <span onClick={() => abrirModal(biblia[12])}>João 14:26</span>
            ). Independentemente de como as palavras chegaram até os autores, o
            que eles escreviam era uma extensão de si mesmos - de suas
            personalidades, habilidades, origens e treinamento. Mas tembém eram
            exatamente as palavras que DEUS desejava que eles escrevessem - as
            próprias palavras que DEUS reivindicaria como suas.
          </p>
          <p>
            Visto que DEUS reclama as palavras da Escritura como suas
            próprias,então não há, em última análise, nenhuma autoridade a quem
            apelar como prova dessa reivindicação senão a própria Escritura.
            Pois, que autoridade pode ser maior a de DEUS? Assim, a Escritura,
            definitivamente, obtém sua autoridade dela própria. Mas os reclamos
            da Escritura somente se tornam nossas convicções pessoais através da
            obra do ESPÍRITO SANTO no coração individual.
          </p>
          <p>
            O ESPÍRITO SANTO não altera as palavras da Escritura de modo nenhum;
            ele não age sobrenaturalmente para torná-las palavras de DEUS (pois
            elas sempre foram). No entanto, ele muda o leitor da Escritura. O
            ESPÍRITO SANTO faz com que os leitores percebam que a Bíblia é
            diferente de qualquer livro que já tenham lido. Mediante a
            leitura,eles passam a crer que as palavras da Escritura são as
            palavras do próprio DEUS. É como JESUS disse em{" "}
            <span onClick={() => abrirModal(biblia[16])}>João 10:27</span>:{" "}
            <q>As minhas ovelhas ouvem a minha voz... E elas me seguem</q>.
          </p>
          <p>
            Outros tipos de argumentos (como confiabilidade histórica,
            consistência interna, profecias cumpridas, influência sobre outros e
            a majestosa beleza e sabedoria do conteúdo) podem ser úteis para nos
            auxiliar a ver a razoabilidade dos reclamos da Bíblia. Como
            reiaspalavras de DEUS, as palavras da Escritura são mais do que
            simplismente verdadeiras; elas são a própria verdade (
            <span onClick={() => abrirModal(biblia[17])}>João 17:17</span>).
            Elas são o aferidor final pelo qual toda suposta verdade deve ser
            avaliada. Logo, o que não se harmoniza com elas não é verdade. Novos
            fatos científicos ou históricos podem nos levar a reexaminar nossa
            interpretação da Escritura, mas nunca a contradirão diretamente.
          </p>
          <p>
            A verdade das Escrituras não exige que a Bíblia relate eventos com
            detalhamento científico exato (embora todos os detalhes que ela
            registra sejam verdadeiros), tampouco que nos conte tudo o que
            precisamos conhecer ou poderíamos saber de um assunto. Ela nunca faz
            qualquer uma dessas afirmações. Além disso, como foi escrita por
            homens comuns em uma linguagem comum e num estilo comum, ela não
            contém citações livres ou soltas e algumas incomuns e desusadas
            formas ortográficas e gramaticais. Mas essas não são questões de
            veracidade. A Bíblia, em sua forma original, não afirma nada
            contrariamente ao fato.
          </p>
          <p>
            Se a Bíblia afirmar algo contrário ao fato, então ela não pode ser
            confiável. E se ela não pode ser confiável, então o próprio DEUS
            também não. Crer que a Bíblia afirme algo falso seria descrer do
            próprio DEUS. Descrer de DEUS é colocar a si mesmo como autoridade
            mais elevada, com mais profunda e desenvolvida compreensão sobre um
            assunto ou assuntos do que a do próprio DEUS.
          </p>
          <p>
            Portanto, uma vez que a Bíblia afirma que ela é as próprias palavras
            de DEUS, devemos buscar entender essas palavras, pois, fazendo isso,
            estaremos procurando entender o próprio DEUS. Devemos confiar nas
            palavras da Escritura, porquanto, assim procedendo, estaremos
            buscando confiar no próprio DEUS. E devemos procurar obedecer às
            palavras da Escritura, pois, dessa forma, estaremos buscando
            obedecer ao próprio DEUS.
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Autoridade;
