import Conhecivel from "./Conhecivel";
import Espirito from "./Espirito";
import Eterno from "./Eterno";
import Existe from "./Existe";
import Imutavel from "./Imutavel";
import Independente from "./Independente";
import Invisivel from "./Invisivel";
import Onipresente from "./Onipresente";
import Onisciente from "./Onisciente";
import Sabio from "./Sabio";
import Verdadeiro from "./Verdadeiro";
import Bom from "./Bom";

const Deus = () => {
  return (
    <section>
      <h2>DEUS</h2>
      <p className="topico">
        Assim como a Escritura é a suprema fonte de informações sobre si mesma,
        DEUS é a mais alta fonte de informações sobre Ele próprio. Isso faz
        sentido, pois, se houvesse uma fonte mais elevada de informações sobre
        DEUS, então Ele não seria DEUS. Por conseguinte, é importante que
        qualquer estudo sobre o Senhor considere o que DEUS diz sobre si mesmo
        nas páginas da Escritura.
      </p>
      <Existe />
      <Conhecivel />
      <Independente />
      <Imutavel />
      <Eterno />
      <Onipresente />
      <Espirito />
      <Invisivel />
      <Onisciente />
      <Sabio />
      <Verdadeiro />
      <Bom />
    </section>
  );
};

export default Deus;
