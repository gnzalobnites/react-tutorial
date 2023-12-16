import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    nombre: '',
    trabajo: '',
  };

  state = this.initialState;
  
  handleChange = (event) => {
  const { name, value } = event.target;

  this.setState({
    [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
   const { nombre, trabajo } = this.state;

   return (
    <form>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        value={nombre}
        onChange={this.handleChange}
      />
      <br />
      <label htmlFor="trabajo">Trabajo</label>
      <input
        type="text"
        name="trabajo"
        id="trabajo"
        value={trabajo}
        onChange={this.handleChange}
      />
      <br />
      <input type="button" value="Enviar" 
onClick={this.submitForm} />
     </form>
    );
   }
}

export default Form;
