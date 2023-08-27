import { ReactNode } from 'react';

interface ListProps<T> { // Where T is "type parameter", can be named differently
  items: T[],
  render: (item: T) => ReactNode
}

//  <T extends{}> or <T,>
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}> {render(item)} </li>
      ))}
    </ul>
  )
}

export default List