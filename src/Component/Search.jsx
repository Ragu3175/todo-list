function Search( { handleSearch, Search } ) {
  return (
      <div>
          <h2 style={{ textAlign: 'center', color: '#333' }}>Search</h2>
           <div id="searchcont">
                  <input type="text" value={Search} onChange={( e ) => handleSearch( e.target.value )} placeholder="Search" />
            </div>
    </div>
  )
}
export default Search