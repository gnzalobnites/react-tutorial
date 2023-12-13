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
  const filas = props.propDePejes.map((fila, 
índice) => {
    return (
      <tr key={índice}>
        <td>{fila.nombre}</td>
        <td>{fila.trabajo}</td>
        <td>
          <button onClick={() => 
props.eliminarPersonaje(índice)}>Eliminar</button>
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
      <TableBody />
    </table>
  );
};

export default Table
