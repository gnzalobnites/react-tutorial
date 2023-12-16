import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

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

  handleSubmit = (personaje) => {
    this.setState({ personajes: 
[...this.state.personajes, personaje] });
  };
  
  render() {
    
    return (
      <div className="container">
        <Table propDeAppATable={this.state.personajes} eliminarATable={this.eliminarPersonaje} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
