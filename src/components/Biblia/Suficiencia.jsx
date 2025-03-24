import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import biblia from "../../dados/biblia.json";

const Suficiencia = () => {
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
        <h3>Suficiência</h3>
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
            Embora aqueles que viveram durante o período do Antigo Testamento
            não desfrutassem do benefício da revelação completa de DEUS, somente
            encontrada no Novo Testamento, eles tiveram acesso a todas as
            palavras que DEUS pretendia dar durante sua vida. Hoje a Bíblia
            contém todas as palavras divinas de que um indivíduo precisa para se
            tornar um cristão, viver como um cristão e crescer como um cristão.
            A fim de ser <q>irrepreensíveis</q> diante de DEUS, temos apenas que
            obedecer a sua Palavra:{" "}
            <q>
              Como são felizes os que andam em caminhos irrepreensíveis, que
              vivem conforme a lei do Senhor!
            </q>{" "}
            (<span onClick={() => abrirModal(biblia[36])}>Salmos 119:1</span>
            ). Na Bíblia, DEUS deu instruções que nos equipam para{" "}
            <q>toda a boa obra</q> que Ele quer que façamos (
            <span onClick={() => abrirModal(biblia[37])}>
              2ªTimóteo 3:16-17
            </span>
            ). Isso significa dizer que a Escritura é <q>suficiênte</q>.
          </p>
          <p>
            Por conseguinte, é tão somente na Escritura que buscamos as palavras
            divinas para nós, e devemos, por fim, encontrar satisfação com o que
            Nela se acha. A suficiência da Escritura deve nos encorajar a buscar
            e encontrar por meio da Bíblia o que DEUS quer que pensamos sobre
            certos assuntos ou o que fazer em certa situação. Tudo o que DEUS
            tenciona dizer a seu povo, independentemente do momento e do assunto
            ou situação em que nos encontramos, encontra-se nas páginas da
            Bíblia. Conquanto a Bíblia não seja capaz de responder diretamente
            cada pergunta que possamos formular, pois{" "}
            <q>as coisas encobertas pertencem ao Senhor, o nosso Deus</q> (
            <span onClick={() => abrirModal(biblia[30])}>
              Deuteronômio 29:29
            </span>
            ), Ela nos provê a guia de que precisamos{" "}
            <q>para toda a boa obra</q> (
            <span onClick={() => abrirModal(biblia[38])}>2ªTimóteo 3:17</span>
            ).
          </p>
          <p>
            Quando não encontramos na Bíblia uma resposta específica para uma
            dada pergunta, não ficamos livres para adicionar aos mandamentos{" "}
            <q>escriturísticos</q> o que acreditamos ser objetivamente correto.
            Certamente é possível que DEUS nos dê orientações específicas em
            situações particulares do dia-a-dia, porém, não temos permissão para
            colocar em pé de igualdade com a Escritura qualquer revelação, dica
            ou outras formas de orientação mais modernas que acreditamos
            provirem de DEUS. Também não devemos procurar impor tais orientações
            sobre outros cristãos ou a outras pessoas em nossa igreja, uma vez
            que podemos estar errados sobre a questão, e DEUS nunca deseja que
            coloquemos algo assim na mesma categoria de suas palavras na Bíblia.
          </p>
          <p>
            Há problemas e situações para as quais DEUS não deu a direção ou
            regras precisas que muitas vezes desejamos, mas, em razão de a
            Escritura ser suficiênte, não temos o direito de acrescentar nada a
            seus reclamos ou ensinamentos. Por exemplo, embora seja apropriado
            para uma igreja reunir-se em determinado momento no domingo de
            manhã, poderia ser muito mais conveniente para outra igreja se
            congregar noutro horário, porque a Bíblia não fala diretamente sobre
            a questão dos horários de culto no domingo. Se uma igreja dissesse a
            outra que elas precisavam se reunir a certa hora, aquela estaria em
            pecado e não demonstrando fé na suficiência da Escritura.
          </p>
          <p>
            De maneira idêntica, no que diz respeito à vida cristã, a
            suficiência da Escritura nos lembra de que nada é pecado a não ser o
            que seja explicita ou implicitamente proibido pela Escritura.
            Portanto, não devemos acrescentar proibições onde não acharmos que a
            Escritura tenha sido suficientemente precisa. De tempos em tempos,
            por exemplo, pode haver muitas situações nas quais um cristão não
            deve ingerir cafeína, ir ao cinema ou comer carne oferecida a ídolos
            (
            <span onClick={() => abrirModal(biblia[39])}>1ªCoríntios 8-10</span>{" "}
            ). No entanto, uma vez que não haja nenhum ensinamento específico ou
            algum princípio geral da Escritura que proíba tais ações para os
            cristãos, independentemente de época, essas atividades não são
            propriamente pecaminosas.
          </p>
          <p>
            Então, em nossos ensinos doutrinários, éticos ou morais e nas
            crenças, devemos nos contentar com o que DEUS nos diz na Escritura.
            O Senhor revelou exatamente o que Ele sabe ser melhor para nós.
            Muitas diferenças que têm dividido igrejas e denominações são
            aquelas as quais a Bíblia dá pouca ênfase. Muitas conclusões
            específicas sobre assuntos como a maneira própria de governar a
            igreja, a exata natureza da presença de Cristo na ceia do Senhor ou
            a correta natureza da ordem dos eventos que cercam o retorno de
            Cristo são extraídas mais do hábil raciocínio do que de declarações
            bíblicas diretas. Dever-se-ia, portanto, mostrar uma humilde
            hesitação em dar mais ênfase a muitos dos assuntos do que a própria
            Bíblia lhes dá.
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Suficiencia;
