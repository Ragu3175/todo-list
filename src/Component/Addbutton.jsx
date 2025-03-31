function Addbutton({name,handleChange,handleClick}) {
  return (
      <div>
          <input type="text" value={name } onChange={ handleChange} id="inputname" placeholder="Enter your list"/>
          <button onClick={handleClick} id="addbutton">ADD</button>
    </div>
  )
}
export default Addbutton