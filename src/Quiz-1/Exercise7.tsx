// 7 .Componente de lista genérico: implemente un componente de lista genérico que pueda mostrar
//  elementos de cualquier tipo (cadenas, números o un objeto personalizado). 
// Utilice genéricos de TypeScript para permitir tipos de elementos flexibles.

import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function GenericList<T>({ items, renderItem }: ListProps<T>) {

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default GenericList;