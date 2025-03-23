import { useState } from "react";
import Button from "../../Button";

const Conhecivel = () => {
  const [ativo, setAtivo] = useState(false);

  const ativar = () => {
    setAtivo(!ativo);
  };

  return (
    <article>
      <div className="titulo">
        <h3>DEUS é conhecível</h3>
        <Button onClick={ativar} estado={ativo ? "Fechar" : "Abrir"} />
      </div>
      {ativo && (
        <div className="subtopico">
          <p>
            DEUS não apenas existe; Ele existe de tal modo que podemos conhecer
            coisas a seu respeito e chegar a conhecê-lo pessoalmente.
          </p>
          <p>
            Nunca, em verdade, poderemos conhecer plenamente a DEUS. Ele é
            infinito, enquanto nós somos finitos.{" "}
            <q>É impossível medir o seu conhecimento</q> (
            <span>Salmos 147:5</span>). O conhecimento de DEUS é
            <q>maravilhoso demais</q> para nós; <q>está além</q> do nosso{" "}
            <q>alcance</q> (<span>Salmos 139:6</span>) e, se pudermos contar os
            pensamentos de DEUS, descobriremos que eles são maiores em número do
            que os grãos de areia da Terra (<span>Salmos 139:17-18</span>)
          </p>
          <p>
            Embora nunca conheçamos a DEUS completamente, podemos conhecê-lo
            pessoalmente. JESUS disse que a vida eterna é encontrada ao
            conhecermos a DEUS e tomarmos ciência de que Ele é{" "}
            <q>o único Deus verdadeiro</q> que o enviou (<span>João 17:3</span>
            ). Isso é muito melhor do que simplesmente conhecer sobre DEUS. Na
            verdade, em <span>Jeremias 9:24</span> DEUS diz:{" "}
            <q>
              Mas quem se gloriar, glorie-se nisto: em compreender-me e
              conhecer-me
            </q>
            .
          </p>
          <p>
            Além de conhecer a DEUS, podemos saber mais sobre Ele pelo que nos
            conta de si mesmo nas páginas da Escritura. Por exemplo, a Escritura
            nos diz que DEUS é amor (<span>1ªJoão 4:8</span>), DEUS é luz (
            <span>João 1:5</span>), DEUS é espírito (<span>João 4:24</span>), e
            DEUS é justo (<span>Romanos 3:26</span>). Alguns dos atributos de
            DEUS serão mais fáceis de entender, porque são aqueles que Ele
            compartilha conosco; outros podem ser mais difíceis de entender,
            porque são atributos que Ele não compartilha conosco. Como somos
            criaturas finitas de um Criador infinito, jamais entenderemos
            completamente tudo o que há para saber sobre qualquer um dos seus
            atributos. Mesmo assim, há um enorme valor em conhecer os atributos
            de DEUS, pois neles encontramos as coisas verdadeiras a seu
            respeito, as quais Ele quer que conheçamos. E como seres criados
            para a glória Dele (<span>Isaías 43:7</span>), podemos glorificá-lo
            ao imitá-lo e mostrar semelhança com seu atributos.
          </p>
        </div>
      )}
    </article>
  );
};

export default Conhecivel;
