
import { useState } from "react"
import Form from "./Form.jsx"
import Logo from "./Logo.jsx"
import PaclkingList from "./PaclkingList.jsx"
import Stats from "./Stats.jsx"


function App() {
  const [items, setItems] = useState([]);

  function handleAddItems (item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item=>item.id !== id))
  }

  function handleDeleteAll () {
    const confirmed = window.confirm("Are you sure you want to delete all items")
    if (confirmed) setItems([]);
  }
  
 
  function handleToggleItem(id) {
    setItems((items) => 
    items.map((item) =>
    item.id === id ? {...item, packed: !item.packed} :item));
  }
  return (
    <div>
      <Logo />
      <Form onAddItems = {handleAddItems}/>
      <PaclkingList 
      items ={items} 
      onDeleItem = {handleDeleteItem} 
      onToggleItem = {handleToggleItem}
      onDeleteAll  = {handleDeleteAll}
      />
      <Stats items = {items}/>
    </div>
  )
}

export default App
