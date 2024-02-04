// 8. Componente de visualización de matriz de solo lectura: cree un componente que acepte y muestre una matriz de 
// elementos de solo lectura, que muestra cómo definir y usar tipos de solo lectura en TypeScript.

import React from 'react';

type ReadOnlyProps = {
    name: readonly string[],
}

function ReadOnlyCompt({name}: ReadOnlyProps) {
    return (
        <div>
            <h2>8. Read Only</h2>
            {name}
        </div>
    )
}

export default ReadOnlyCompt;