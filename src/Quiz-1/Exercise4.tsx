// Componente de Manejo de Eventos: Desarrolle un componente con un botón que, al hacer clic, actualice el estado. 
// Escriba el controlador de eventos de clic utilizando TypeScript para garantizar la correcta tipificación de eventos.


import React, { useState } from 'react';
import { Button } from '@mui/material';

const EventHandling: React.FC = () => {
  const [estado, setEstado] = useState<string>('Inicial');

  const handleClick = () => {
    setEstado('Actualizado');
  };

  return (
    <div>
      <h2> 4. Estado: {estado}</h2>
      <Button variant= 'contained' color='primary' onClick={handleClick}>Estado</Button>
    </div>
  );
};

export default EventHandling;