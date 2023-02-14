import './App.css';
import Boton from './componentes/boton.js';
import fccLogo from './images/Fcc_logo.png';
import './style/boton.css'
import Contador from './componentes/contador';
import './style/contador.css';
import {useState} from 'react'; //importo un HOOK

function App() {
  let [ValornumDeClick, setNumdeClicks] = useState(0); 

  const sumar= ()=>{ setNumdeClicks(ValornumDeClick+1) }
  const restar= ()=>{ setNumdeClicks(ValornumDeClick-1) }
  const reiniciar= ()=>{ setNumdeClicks(ValornumDeClick=0) }
  

  const [datos, setDatos] = useState({
    valorNombre:'',
    valorPass:''
  })

  // está a la escucha de la introduccion de caracteres. #addEventListener y los asigna al valor input
  const change=(e)=>{
    console.log(e.nativeEvent) //me retorna cada caracter introducido.
    console.log('ANTERIOR',datos.valorNombre, 'ACTUAL->',e.nativeEvent.data) //
    if(e.nativeEvent.data == 1){
      console.log('Usted introdujo el N°1 ')
    }
    setDatos({
      ...datos,[e.target.name]:[e.target.value]
    })
  }

  // seria como el Submit, #onSubmit
  const enviarDatos=(e)=>{
    e.preventDefault()
    console.log('Diste clic en enviar formulario')
    console.log(datos.valorNombre, datos.valorPass,' Fin')
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo' src={fccLogo} alt="logo de fcc"/>
        </div>
        <div className='contenedor-principal'>
        
        <Contador numDeClick={ValornumDeClick} />
          
          <Boton texto='Sumar' tipoDeBoton='sumar' manejarClick={sumar} />

          <Boton texto='Restar' tipoDeBoton='restar' manejarClick={restar} />

          <Boton texto='Reiniciar' tipoDeBoton='reiniciar' manejarClick={reiniciar} />
        </div>

          <form onSubmit={enviarDatos}>
            <div >
              <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
              <input value={datos.valorNombre} onChange={change} name='valorNombre' type="text" className="form-control" />
            </div>
            <div >
              <label className="form-label">Password</label>
              <input value={datos.valorPass} onChange={change} name='valorPass' type="password" className="form-control"/>
            </div>
            

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>


      </header>
    </div>
  );
}

export default App; 
