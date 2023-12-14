import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  
  state = {
    personajes: [
      {
        nombre: 'Charlie',
        trabajo: 'Conserje',
      },
      {
        nombre: 'Mac',
        trabajo: 'Portero',
      },
      {
        nombre: 'Dee',
        trabajo: 'Aspirante a actriz',
      },
      {
        nombre: 'Dennis',
        trabajo: 'Cantinero',
      },
     ],
   };

  eliminarPersonaje = (indice) => {
    const personajes = this.state.personajes;
    this.setState({
      personajes: personajes.filter((personaje, i) => {
        return i !== indice;
      }),
    });
  };
  
  render() {
    const pejes = [
      {
        nombre: 'Charlie',
        trabajo: 'Conserje',
      },
      {
        nombre: 'Mac',
        trabajo: 'Portero',
      },
      {
        nombre: 'Dee',
        trabajo: 'Aspirante a actriz',
      },
      {
        nombre: 'Dennis',
        trabajo: 'Cantinero',
      },
    ];
    
    return (
      <div className="container">
        <Table propDeAppATable={this.state.personajes} eliminarPersonaje={this.eliminarPersonaje} />
      </div>
    )
  }
}

export default App
