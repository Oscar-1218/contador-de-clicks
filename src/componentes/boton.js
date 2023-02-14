function Boton({ tipoDeBoton, manejarClick, texto}){//esto se conoce como DESESTRUCTURACION {texto} en lugar de escribir props.texto
  return(
    /* de aqui surge la clase del button, y la vida del boton(si le quito onclick, no responde) */
    <button className={tipoDeBoton} onClick={manejarClick}> 
      {texto}
    </button>
  );
}
export default Boton;