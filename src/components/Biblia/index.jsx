import Autoridade from "./Autoridade";
import Clareza from "./Clareza";
import Necessidade from "./Necessidade";
import Suficiencia from "./Suficiencia";

const Biblia = () => {
  return (
    <section>
      <h2>Bíblia</h2>
      <p className="topico">
        Qualquer análise responsável de uma simples crença cristã deve estar
        baseada no que DEUS disse sobre o assunto. Portanto, ao olharmos para
        uma série de crenças cristãs básicas, faz sentido começar com o
        fundamento dessas crenças - as palavras de DEUS ou a Bíblia. Um tópico
        que a Bíblia abrange minuciosamente é ela mesma; isto é, a Bíblia nos
        diz o que DEUS pensa sobre suas próprias palavras. A opinião de DEUS
        sobre suas palavras pode ser dividida em quatro categorias gerais:
        autoridade, clareza, necessidade e suficiência.
      </p>
      <Autoridade />
      <Clareza />
      <Necessidade />
      <Suficiencia />
    </section>
  );
};

export default Biblia;
