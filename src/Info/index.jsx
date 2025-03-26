const index = () => {
  return (
    <section>
      <h3>Informações importantes:</h3>
      <p>
        O conteúdo deste App foi extraído do livro Bases da Fé Cristã de Wayne
        Grudem e da própria Palavra de DEUS, a Bíblia Sagrada. Cada tópico
        contêm alguns subtópicos que podem ser abertos e fechados conforme a
        necessidade do usuário.
      </p>
      <p></p>
      <p>Dentro de cada subtópico, você irá encontrar:</p>
      <ul>
        <li>Explicações sobre o assunto;</li>
        <li id="textoCitacoes">Citações bíblicas;</li>
        <li id="textoVersiculos">
          Referências bíblicas (clique sobre elas para abri-las).
        </li>
      </ul>
    </section>
  );
};

export default index;
