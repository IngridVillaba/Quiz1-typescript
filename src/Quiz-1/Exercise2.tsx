//2. Componente de interfaz y accesorios: Diseñe un componente que acepte accesorios 
// para mostrar el perfil de un usuario, incluyendo nombre, edad y una lista de pasatiempos. 
// Utilice una interfaz para escribir los accesorios

import React from 'react';
import { Chip } from '@mui/material';

interface PersonProps {
    name: string,
    lastname: string,
    age: number,
    hobbies: string[],
}

function Person ({name, lastname, age, hobbies}: PersonProps) {
    return (
        <div>
            <h2>2. Person Props</h2>
            <Chip label= {name}/>
            <Chip label= {lastname}/>
            <Chip label= {age}/>
            <Chip label= {hobbies}/>
        </div>   
    )
    
}



export default Person;