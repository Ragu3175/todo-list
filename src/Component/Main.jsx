import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Main.css";
import Search from "./Search";
import Itemslist from "./Itemslist";
import Addbutton from "./Addbutton";
function Main() {
  // API endpoint for fetching and managing todo items
  const API_URL = "http://localhost:4000/items";
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  // State to store any errors encountered during data fetching
  const [fetcherror, setfetchError] = useState(null);

  useEffect(() => {
    // JSON.parse(localStorage.getItem("todo_list"));
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw console.error("data not received");
        const newItems = await response.json();
        console.log(newItems)
        setItems(newItems);
        setfetchError(null)
      } catch (err) {
        setfetchError(err.message)
      }
    }
    (async () => await fetchItems())()
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const inputRef = useRef();
  const handleClick = () => {
    if (name === "") {
      alert("please enter list");
      return;
    }
    const updateItems = { id: Date.now(), checked: false, name: name };
    const newItems = [...items, updateItems];
    setItems(newItems);
    setName("");
  };
  const handlenewChange = (id) => {
    console.log(id);
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  };
  const handleDelete = (id) => {
    console.log(`Item with id ${id} deleted`);
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);

  };
  const handleSearch = (e) => {
    setSearch(e);
  };
  // This is the main component of the todo list application
  return (
    <div className="Main1">
      <header id="headpart">
        <h1>TO DO LIST</h1>
        <h4 className="main-subtitle">Organize your life, one task at a time.</h4>
        <h2>Manage your daily tasks</h2>
      </header>
      <div className="Main">
        <Search onSearch={handleSearch} />
        <Itemslist items={items} onDelete={handleDelete} onChange={handlenewChange} />
        <Addbutton onClick={handleClick} value={name} onChange={handleChange} />
      </div>
    </div>
  );
}
