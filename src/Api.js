import React, { Component } from 'react';

class App extends Component {
  state = {
    datos: [],
  };

  // El código se invoca después de que el componente se monta/inserta en el árbol del DOM.
  componentDidMount() {
    const url = 
'https://en.wikipedia.org/w/api.php?action=opensearch&search=Argentina&format=json&origin=*';

    fetch(url)
      .then((resultado) => resultado.json())
      .then((resultado) => {
        this.setState({
          datos: resultado,
        });
      });
  }

  render() {
    const { datos } = this.state;

    const resultado = datos.map((entrada, indice) => {
      return <li key={indice}>{entrada}</li>;
    });

    return <ul>{resultado}</ul>;
  }
}

export default App;
