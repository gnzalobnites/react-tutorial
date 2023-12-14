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
    //let hora = this.state.hora;
    let fechaJS = new Date();
    let horaAct = fechaJS.getHours()<10? 
'0'+fechaJS.getHours(): fechaJS.getHours();
    let minsActs = fechaJS.getMinutes()<10? 
'0'+fechaJS.getMinutes(): fechaJS.getMinutes();
    let segsActs = fechaJS.getSeconds()<10? 
'0'+fechaJS.getSeconds(): fechaJS.getSeconds();
    this.setState({
      hora: {
          horas: horaAct,
          minutos: minsActs,
          segundos: segsActs,
        },
    });
  }

  componentDidMount() {
    const intervalId = setInterval(this.imprimirHora, 1000);
    this.setState({ intervalId }); // Save the interval ID for later cleanup
  }

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId); // Clear the interval when component unmounts
    }
  }
  
  render() {
    
    return (
      <div className="d-flex justify-content-center align-items-center"><h1
mx-auto>{this.state.hora.horas}:{this.state.hora.minutos}:{this.state.hora.segundos}</h1></div>
    )
  }
}

export default App
