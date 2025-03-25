const index = () => {
  return (
    <div className="info">
      <h2>Informações importantes:</h2>
      <p>
        O conteúdo deste App foi extraído do livro Bases da Fé Cristã de Wayne
        Grudem e da própria Palavra de DEUS, a Bíblia Sagrada. Cada tópico
        contêm alguns subtópicos que podem ser abertos e fechados conforme a
        necessidade do usuário.
      </p>
      <p></p>
      <p>Dentro de cada subtópico, você irá encontrar:</p>
      <ul>
        <li id="textoClaro">A explicação de cada assunto;</li>
        <li id="textoCitacoes">Citações de versículos;</li>
        <li id="textoVersiculos">
          Referência dos versículos (clique sobre eles para abri-los).
        </li>
      </ul>
    </div>
  );
};

export default index;
