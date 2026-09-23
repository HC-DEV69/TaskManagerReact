function SortFilter({sortBy, setSort}){


    return(

        <>
        
        <div className="sort-filter">

        <select name="sort" id="sort" value={sortBy} onChange={(e)=>setSort(e.target.value)}>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="high priority">High Priority First</option>
            <option value="alphabetical">Alphabetical</option>

            
        </select>

        </div>

        </>

    )

}

export default SortFilter;