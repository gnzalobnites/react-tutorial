import React, { Component } from 'react'

class App extends Component {
  horaProp = {hora:'0000'};
  state = {
    hora: {
        horas: '00',
        minutos: '00',
        segundos: '00',
      },
     
   };

  imprimirHora = () => {
    let hora = this.state.hora;
    let fechaJS = new Date();
    let horaAct = fechaJS.getHours();
    let minsActs = fechaJS.getMinutes();
    let segsActs = fechaJS.getSeconds();
    this.setState({
      hora: {
          horas: horaAct,
          minutos: minsActs,
          segundos: segsActs,
        },
    });
  }
  
  render() {
    
    return (
      <div className="container">
         <h1 
onClick={()=>this.imprimirHora()}>{this.state.hora.horas}:{this.state.hora.minutos}:{this.state.hora.horas}</h1>
      </div>
    )
  }
}

export default App
