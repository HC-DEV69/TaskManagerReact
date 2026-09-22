
function SearchBar({setSearch}) {
    

   

    return(
        <>
            <input type="text" name="search" id="searchBar" placeholder="Search Task..."
            onChange={(e)=>setSearch(e.target.value)} />
        </>
    )
}

export default SearchBar