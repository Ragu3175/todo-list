import { useState } from "react";
import "./Main.css";
import Search from "./Search";
import Itemslist from "./Itemslist";
import Addbutton from "./Addbutton";
function Main() {
    const [items, setItems] = useState( [] );
    const [name, setName] = useState( "" );
    const [search, setSearch] = useState( "" );
    const handleChange = ( e ) => {
        setName( e.target.value );
    }

    const handleClick = () => {
         if (name === "") {
             alert( "please enter list" );
             return;
         }
        const newItems = { id: Date.now(), checked: false, name:name};
        setItems( [...items, newItems] );
        setName( "" );
        
        console.log( items );
    }
    const handlenewChange = ( id ) => {
       
        const newItems = items.map( ( item ) => 
            item.id === id ? { ...item,checked: !item.checked } : item)
            setItems(newItems) 
              
    }
    const handleDelete = ( id ) => {
        const newItems = items.filter( ( item ) => item.id !== id );
        setItems( newItems );
         
    }
    const handleSearch = ( e ) => {
        setSearch( e );
    }
  return (
      <div className="Main1">
          <header id="headpart"><h1>TO DO LIST</h1></header>
          <div className="main11">
              <Search
                  Search={search}
                  handleSearch={handleSearch}
              />
              <Addbutton
                  name={name}
                  handleChange={handleChange}
                  handleClick={handleClick}
              />
              <Itemslist
                  items={items}
                  Search={search}
                  handlenewChange={handlenewChange}
                  handleDelete={handleDelete}
              />
          </div>
          <div ><footer id="footer"><h2>TOTAL   ITEMS  :  {items.length }</h2></footer></div>
    </div>
  )
}
export default Main