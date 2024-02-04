// 1. Componente de conceptos básicos de TypeScript: 
// Crea un componente que muestre una lista de conceptos básicos de TypeScript, 
// definidos en una matriz TypeScript de cadenas.
//  Practica escribiendo los props y el estado de tu componente.

import React from 'react';

interface TypeScriptBasicsProps {
    basics: string[];
}

const TypeScriptBasics: React.FC<TypeScriptBasicsProps> = ({ basics }) => {
    return (
        <div>
            <h2>1. TypeScript Basics</h2>
            <ul>
                {basics.map((basic, index) => (
                <li key={index}>{basic}</li>
                ))}
            </ul>
        </div>
    );
};

export default TypeScriptBasics;