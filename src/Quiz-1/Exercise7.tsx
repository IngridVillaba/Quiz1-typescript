// 7 .Componente de lista genérico: implemente un componente de lista genérico que pueda mostrar
//  elementos de cualquier tipo (cadenas, números o un objeto personalizado). 
// Utilice genéricos de TypeScript para permitir tipos de elementos flexibles.

import React from 'react'
import { Paper } from '@mui/material';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}


export default function GenericList<T>({ items, renderItem }: ListProps<T>) {
    return (

    <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
        <ul>
            <h2>Generic List Component</h2>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
                ))}
        </ul>
    </Paper>
    );
}