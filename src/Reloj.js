import React, { useState, useEffect } from 'react';

const Reloj = () => {
  const [hora, setHora] = useState({
    horas: '00',
    minutos: '00',
    segundos: '00',
  });

  const imprimirHora = () => {
    const fechaJS = new Date();
    setHora({
      horas: fechaJS.getHours() < 10
        ? '0' + fechaJS.getHours()
        : fechaJS.getHours(),
      minutos: fechaJS.getMinutes() < 10
        ? '0' + fechaJS.getMinutes()
        : fechaJS.getMinutes(),
      segundos: fechaJS.getSeconds() < 10
        ? '0' + fechaJS.getSeconds()
        : fechaJS.getSeconds(),
    });
  };

  useEffect(() => {
    const intervalId = setInterval(imprimirHora, 1000);
    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: 90 + 'vh' }}>
      <h1>{hora.horas}:{hora.minutos}:{hora.segundos}</h1>
    </div>
  );
};

export default Reloj;
