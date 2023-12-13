import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const filas = props.propRecibidaDeTable.map((fila, 
indice) => {
    return (
      <tr key={indice}>
        <td>{fila.nombre}</td>
        <td>{fila.trabajo}</td>
        
      </tr>
    );
  });

  return <tbody>{filas}</tbody>;
};

const Table = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody propRecibidaDeTable={props.propDeAppATable}/>
    </table>
  );
};

export default Table
