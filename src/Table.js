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
  const filas = props.propDeTableATbody.map((fila, 
indice) => {
    return (
      <tr key={indice}>
        <td>{fila.nombre}</td>
        <td>{fila.trabajo}</td>
        <td>
          <button onClick={() => props.eliminarPersonaje(indice)}>Eliminar</button>
        </td>
      </tr>
    );
  });

  return <tbody>{filas}</tbody>;
};

const Table = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody propDeTableATbody={props.propDeAppATable} eliminarPersonaje={props.eliminarATable} />
    </table>
  );
};

export default Table
