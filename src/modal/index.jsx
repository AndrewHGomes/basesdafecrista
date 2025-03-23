import Button from "../Button";

const Modal = ({ modal, fecharModal, versiculo }) => {
  if (!modal) {
    return null;
  }

  return (
    <div className="modal">
      <h4>
        {versiculo.livro} {versiculo.capitulo}:{versiculo.versiculo}
      </h4>
      <p>{versiculo.texto}</p>
      <Button onClick={fecharModal} estado={"Fechar"} />
    </div>
  );
};

export default Modal;
