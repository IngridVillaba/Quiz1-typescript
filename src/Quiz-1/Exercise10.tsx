// 10.Componente de aserción de tipo y tupla: desarrolle un componente que utilice una tupla para la gestión del estado, 
// por ejemplo, un estado que contenga tanto un valor booleano como una cadena. 
// Además, incluya un ejemplo del uso de la aserción de tipo para manejar un escenario en el que el tipo de una 
// variable debe afirmarse explícitamente.

import React from 'react'


function InfoTuple() {

  const [state, setState] = React.useState<[boolean, string]>([false, '']);

  const updateState = (newState: boolean | string) => {
    if (typeof newState === 'boolean') {
      setState([newState, state[1]]);
    } else {
      setState([state[0], newState as string]);
    }
  };

  return (
    <div>
      <p>Estado Booleano: {state[0] ? 'Verdadero' : 'Falso'}</p>
      <p>Estado String: {state[1]}</p>
      <button onClick={() => updateState(!state[0])}>Cambiar Booleano</button>
      <button onClick={() => updateState('Nuevo mensaje')}>Cambiar String</button>
    </div>
  );
}


export default InfoTuple;