// Representación condicional y accesorios opcionales: cree un componente que acepte opcionalmente un accesorio de mensaje y 
// lo muestre si está presente.
// Utilice TypeScript para hacer que el accesorio sea opcional y demostrar la representación condicional en función de su presencia.

import React from 'react';

interface OptionalMessageProp {
  message?: string,
}

function OptionalMessage ({message}: OptionalMessageProp) {
  return (
    <div>
      <h2> 5. Optional Message</h2>
      {message}
    </div>
  )
}

export default OptionalMessage;