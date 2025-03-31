function Itemslist({items,handlenewChange,handleDelete,Search}) {
  return (
      <div>
          <ul id="list">
                  {
                  items.filter((item) => item.name.toLowerCase().includes(Search.toLowerCase())).map( ( item ) => (
                      <li key={item.id} id="listednames">
                          <input type="checkbox" onChange={() => handlenewChange( item.id )} checked={item.checked} id ="check" />
                          <label id="enteredname">{item.name}</label>
                          <button onClick={() =>  handleDelete(item.id)} id="delete">X</button>
                      </li>
                  ))
                 }
              </ul>
    </div>
  )
}
export default Itemslist