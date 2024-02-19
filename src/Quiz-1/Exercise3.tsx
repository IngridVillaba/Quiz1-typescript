// Estado con TypeScript en Componente Funcional:
//  Implementar un componente contador que utilice useState para gestionar su estado de conteo, tipado con TypeScript. 
// Incluye botones para incrementar y decrementar el conteo.

import React, { useState } from 'react';
import { Button } from '@mui/material';

const Counter: React.FC = () =>{
    const [count, setCount] = useState<number>(0);

    const decrement = ()=> {
        setCount(count-1);
    }

    const increment = ()=> {
        setCount(count+1);
    }


    return (
        <div>
            <h2>3. Counter: {count}</h2>
            <Button color='primary' onClick={increment}>Increment</Button>
            <Button color= 'secondary' onClick={decrement}>Decrement</Button>
        </div>
    )
}


export default Counter;