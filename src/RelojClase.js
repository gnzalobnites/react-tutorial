import React, { Component } from 'react'

class Reloj extends Component {

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
  
  imprimirHora = () => {
    //let hora = this.state.hora;
    let fechaJS = new Date();
    let horaAct = fechaJS.getHours()<10?
'0'+fechaJS.getHours(): fechaJS.getHours();
    let minsActs = fechaJS.getMinutes()<10?
'0'+fechaJS.getMinutes(): fechaJS.getMinutes();
    let segsActs = fechaJS.getSeconds()<10?
'0'+fechaJS.getSeconds(): fechaJS.getSeconds();
    this.props.setHora({
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
    let {colorFuente, colorFondo} = 
this.props.valores.coloresReloj;

    return (
      <div className="d-flex 
justify-content-center align-items-center" 
style={{ height: 90 + 'vh', color: `${colorFuente}`, 
backgroundColor: `${colorFondo}`}}>
        <h1>{this.props.valores.hora.horas}:{this.props.valores.hora.minutos}:{this.props.valores.hora.segundos}</h1>
      </div>
    )
  }
}

export default Reloj
