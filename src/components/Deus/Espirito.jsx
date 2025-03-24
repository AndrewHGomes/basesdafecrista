import { useState } from "react";
import Button from "../../Button";

const Espirito = () => {
  const [ativo, setAtivo] = useState(false);

  const ativar = () => {
    setAtivo(!ativo);
  };

  return (
    <article>
      <div className="titulo">
        <h3>DEUS é espírito</h3>
        <Button onClick={ativar} estado={ativo ? "Fechar" : "Abrir"} />
      </div>
      {ativo && (
        <div className="subtopico">
          <p>
            JESUS afirmou que DEUS não está de modo nenhum limitado a uma
            localização espacial quando disse: <q>Deus é espírito</q> (
            <span>João 4:24</span>). DEUS existe de tal modo que seu ser não é
            feito de matéria. Ele não tem partes, nem tamanho, nem dimensões. É
            impossível perceber sua existência por intermédio de nossos
            sentidos. Pensar em seu ser nos termos de qualquer outra coisa no
            universo criado seria uma falsa representação, pois Ele é mais
            excelente do que qualquer outro tipo de existência.
          </p>
          <p>
            No entanto, o Senhor optou por nos tornar, em nossa natureza
            espiritual, um pouco como Ele próprio em sua natureza espiritual.
            Ele nos dotou de espírito com o qual devemos adorá-lo (
            <span>João 4:24</span>). Paulo nos diz que quem está unido a DEUS{" "}
            <q>é um espírito</q> com Ele (<span>1ªCoríntios 6:17</span>). Como
            um espírito com DEUS, seu Santo Espírito dentro de nós testemunha de
            nosso <q>status</q> como seus filhos adotados (
            <span>Romanos 8:16</span>). Quando morremos, se unidos a Ele, nosso
            espírito retornará <q>a Deus que o deu</q> (
            <span>Eclesiastes 12:7</span>).
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Espirito;
