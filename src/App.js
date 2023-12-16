import React, { Component } from 'react'
import Reloj from './RelojClase'
import NavBar from './NavBar'

class App extends Component {
  
  state = {
      hora: {
         horas: '00',
         minutos: '00',
         segundos: '00',
     },
     coloresReloj: {
        colorFuente: '#0f0',
        colorFondo: '#000',
     },
   };

  setHora = (horaAct) => {
    this.setState(horaAct)
  };

  setColores = (colores) => {
    this.setState(colores)
  };
  
  render() {
    
    return (
     <>
      <NavBar valores={this.state} 
setColores={this.setColores} />
      <Reloj valores={this.state} 
setHora={this.setHora} />
     </>
    )
  }
}

export default App
