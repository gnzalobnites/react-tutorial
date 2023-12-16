import React, { Component } from 'react';
 
class NavBar extends Component {

  colorFu = (event) => {
    let colorFu = event.target.value;
    this.props.setColores({
      coloresReloj: {
         colorFuente: colorFu,
         colorFondo: this.props.
   valores.coloresReloj.colorFondo,
      },
    });
  }

  colorFo = (event) => {
     let colorFo = event.target.value;
     this.props.setColores({
       coloresReloj: {
         colorFuente: this.props.valores.coloresReloj.colorFuente,
         colorFondo: colorFo,
       },
     });
   }

  render() {

    const { colorFuente, colorFondo } = this.props.valores.coloresReloj;

    return (
      <div className="d-flex 
justify-content-center align-items-center" style={{ height: 10 + 'vh', color: `${colorFuente}`, backgroundColor: `${colorFondo}`}}>
         <input onInput={(event) => 
{this.colorFu(event)}} type="color" 
id="colorFu" value={colorFuente} />
         <input onInput={(event) => 
{this.colorFo(event)}} type="color" 
id="ColorFo" value={colorFondo} />
       </div>
    );
  }
}

export default NavBar;
