

export default function Item({item, onDeleItem, onToggleItem}) {
  return (
    <div>
      <li>
        <input 
        type="checkbox" 
        value = {item.packed}
        onChange={() => onToggleItem(item.id)}
        />
        <span style = {item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleItem(item.id)}>❌</button>
        </li>
    </div>
  )
}
