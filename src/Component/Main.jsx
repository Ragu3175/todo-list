import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Main.css";
import Search from "./Search";
import Itemslist from "./Itemslist";
import Addbutton from "./Addbutton";
function Main() {
  const API_URL = "http://localhost:4000/items";
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
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
  return (
    <div className="Main1">
      <header id="headpart">
        <h1>TO DO LIST</h1>
        <h3>Manage your daily tasks</h3>
      </header>
      <div className="main11">
        <Search Search={search} handleSearch={handleSearch} />
        <Addbutton
          name={name}
          handleChange={handleChange}
          handleClick={handleClick}
          inputRef={inputRef}
        />
        <main>
          {fetcherror && <p>Error : {fetcherror}</p>}
          <Itemslist
            items={items}
            Search={search}
            handlenewChange={handlenewChange}
            handleDelete={handleDelete}
          />
        </main>
      </div>
      <div>
        <footer id="footer">
          <h2>TOTAL ITEMS : {items.length}</h2>
        </footer>
      </div>
    </div>
  );
}
export default Main;
