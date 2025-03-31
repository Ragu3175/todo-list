function Search( { handleSearch, Search } ) {
  return (
      <div>
           <div id="searchcont">
                  <input type="text" value={Search} onChange={( e ) => handleSearch( e.target.value )} placeholder="Search" />
            </div>
    </div>
  )
}
export default Search