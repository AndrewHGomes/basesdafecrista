import { useState } from "react";
import Button from "../../Button";
import Modal from "../../modal";
import deus from "../../dados/deus.json";

const Existe = () => {
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
        <h3>DEUS existe</h3>
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
            A Escritura simplesmente parte do princípio de que DEUS existe. O
            primeiro versículo da Bíblia,{" "}
            <q>No princípio Deus criou os céus e a Terra</q> (
            <span onClick={() => abrirModal(deus[0])}>Gênesis 1:1</span>),
            apresenta, de modo natural, DEUS como Criador sem dar qualquer prova
            de sua existência ou ações.
          </p>
          <p>
            A Escritura também nos diz que todas as pessoas, em todo lugar, têm
            um profundo senso interior de que DEUS existe, de que são suas
            criaturas e de que Ele é seu criador. Em{" "}
            <span onClick={() => abrirModal(deus[1])}>Romanos 1:19</span>, Paulo
            escreve que mesmo para os ímpios,{" "}
            <q>é manifesto entre eles, porque Deus lhes manifestou</q>. Ainda
            que muitos hoje não reconheçam que DEUS existe, Paulo diz que isso é
            porque <q>eles trocaram a verdade de Deus pela mentira</q> (
            <span onClick={() => abrirModal(deus[2])}>Romanos 1:25</span>),
            portanto, rejeitaram ativa e voluntariamente alguma verdade acerca
            do caráter de DEUS e de sua existência que originalmente conheciam.
            Em suma, eles se convenceram de que{" "}
            <q>não há lugar para DEUS em nenhum de seus planos</q> (
            <span onClick={() => abrirModal(deus[3])}>Salmos 10:4</span>).
          </p>
          <p>
            O conhecimento acerca de DEUS a que Paulo se refere pode ser{" "}
            <q>compreendido por meio das coisas criadas</q> (
            <span onClick={() => abrirModal(deus[4])}>Romanos 1:20</span>). Cada
            criatura dá evidência de DEUS e de seu caráter, mas os seres
            humanos, criados à imagem de DEUS, são a maior prova da existência
            de DEUS e de seu caráter.
          </p>
          <p>
            Assim sendo, crença em DEUS não é nenhuma <q>fé cega</q>; ela está
            baseada nos indícios que podem ser encontrados tanto na Bíblia como
            no dia-a-dia.
          </p>
        </div>
      )}
    </article>
  );
};

export default Existe;
