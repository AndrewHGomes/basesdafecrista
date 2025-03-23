import { useState } from "react";
import Button from "../../Button";

const Sabio = () => {
  const [ativo, setAtivo] = useState(false);

  const ativar = () => {
    setAtivo(!ativo);
  };

  return (
    <article>
      <div className="titulo">
        <h3>DEUS é sábio</h3>
        <Button onClick={ativar} estado={ativo ? "Fechar" : "Abrir"} />
      </div>
      {ativo && (
        <div className="subtopico">
          <p>
            DEUS sempre escolhe os melhores objetivos possíveis e os melhores
            meios possíveis para alcançar esses objetivos. Ele é{" "}
            <q>o único Deus sábio</q> (<span>Romanos 16:27</span>).{" "}
            <q>Sua sabedoria é profunda</q> (<span>Jó 9:4</span>) e{" "}
            <q>a ele pertencem o concelho e o entendimento</q> (
            <span>Jó 12:13</span>).
          </p>
          <p>
            Sua sabedoria é manifesta em muitas áreas. Por exemplo, por ela o
            Senhor criou todas as coisas (<span>Salmos 104:24</span>). Ela
            também é mostrada por meio da vida{" "}
            <q>
              daqueles que o amam, dos que foram chamados de acordo com o seu
              propósito
            </q>{" "}
            (<span>Romanos 8:28</span>).
          </p>
          <p>
            DEUS concede essa sabedoria a seus filhos. Com ela em mente, Tiago
            incentiva seus leitores:{" "}
            <q>
              Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a
              todos dá livremente, de boa vontade, e lhe será concedida
            </q>{" "}
            (<span>Tiago 1:5</span>). A sabedoria que vem de DEUS - qualidade de
            caráter encontrada em viver do jeito que agrada a DEUS - é
            descoberta por meio da leitura da Palavra de DEUS e obediência ao
            que ela ordena.{" "}
            <q>
              Os testemunhos do Senhor são dignos de confiança e tornam sábios
              os inexperiêntes
            </q>{" "}
            (<span>Salmos 19:7</span>).
          </p>
          <p>
            Mesmo assim, nunca participaremos completamente da sabedoria de
            DEUS. Por causa da grande{" "}
            <q>
              profundidade da riqueza e do conhecimento de Deus, quão
              insondáveis são os seus juízos e inescrutáveis os seus caminhos
            </q>{" "}
            (<span>Romanos 11:33</span>). Às vezes, Ele nos permite entender as
            razões por que as coisas acontecem; outras vezes não seremos capazes
            de entendê-las completamente, porque elas são do modo que são, ou
            sucederam deste ou daquele jeito. Durante esses tempos difíceis,
            devemos de fato confiar <q>no Senhor</q> de todo o coração e não se
            apoiar no <q>próprio entendimento</q> (<span>Provérbios 3:5</span>).
          </p>
        </div>
      )}
    </article>
  );
};

export default Sabio;
