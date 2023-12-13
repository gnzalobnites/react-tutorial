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
    return (
      <div className="container">
        <Table 
eliminarPersonaje={this.eliminarPersonaje} 
propDePejes={this.state.personajes} 
/>
      </div>
    )
  }
}

export default App
