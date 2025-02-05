import { useState } from "react"
import Item from "./Item.jsx"


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];


export default function PaclkingList({items, onDeleItem, onToggleItem, onDeleteAll}) {

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") 
    {
      sortedItems = items;
    }
    
  if (sortBy === "description") sortedItems = items.slice()
    .sort((a, b) => a.description.localeCompare(b.description)) 

  if (sortBy === "packed") sortedItems = items.slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));



  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
            <Item 
            item={item} 
            onDeleItem={onDeleItem}
            key = {item.id}
            onToggleItem = {onToggleItem}
            />
        ))}
      </ul>

      <div className="actions">
        <select 
        value = {sortBy} 
        onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed status</option>
        </select>
        { (sortedItems.length != 0) &&
        <button onClick={() => onDeleteAll()}>Clear List</button>}
      </div>
    </div>
  )
}


