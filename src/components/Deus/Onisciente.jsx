import { useState } from "react";
import Button from "../../Button";

const Onisciente = () => {
  const [ativo, setAtivo] = useState(false);

  const ativar = () => {
    setAtivo(!ativo);
  };

  return (
    <article>
      <div className="titulo">
        <h3>DEUS é onisciente</h3>
        <Button onClick={ativar} estado={ativo ? "Fechar" : "Abrir"} />
      </div>
      {ativo && (
        <div className="subtopico">
          <p>
            DEUS <q>sabe todas as coisas</q> (<span>1ªJoão 3:20</span>). Num ato
            simples e eterno, Ele conhece completamente a si mesmo e a todas as
            coisas reais e possíveis. Ele tem conhecimento de todas as coisas
            que existem e de tudo o que acontece.{" "}
            <q>
              Nada, em toda a criação, está oculto aos olhos de Deus. Tudo está
              descoberto e exposto diante dos olhos daquele a quem havemos de
              prestar contas
            </q>{" "}
            (<span>Hebreus 4:13</span>). Uma vez que Ele se conhece
            completamente (<span>1ªCoríntios 2:10-11</span>), também conhece
            plenamente todas as coisas que Ele poderia ter criado, mas não
            criou. Ele, do mesmo modo, conhece todos os eventos possíveis que
            não vão realmente acontecer, e acontecimentos que resultariam se
            outros eventos tivessem resultado diferente na história (
            <span>Mateus 11:21</span>).
          </p>
          <p>
            DEUS está sempre consciente de tudo. Seu conhecimento nunca muda ou
            aumenta. Nada o surpreende; nada está escondido dele. DEUS conheceu
            todas as coisas que iriam acontecer e tudo quanto iria fazer.
          </p>
          <Button onClick={ativar} estado={"Fechar"} />
        </div>
      )}
    </article>
  );
};

export default Onisciente;
