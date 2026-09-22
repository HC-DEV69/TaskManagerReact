function PriorityFilter({priority, setPriority}) {

    return(

        <>

        <div className="priority-bar">

             <button
                className={priority === "all" ? "active" : ""}
                onClick={() => setPriority("all")}
            >
                All
            </button>

            <button
                className={priority === "low" ? "active" : ""}
                onClick={() => setPriority("low")}
            >
                Low
            </button>

            <button
                className={priority === "medium" ? "active" : ""}
                onClick={() => setPriority("medium")}
            >
                Medium
            </button>

            <button
                className={priority === "high" ? "active" : ""}
                onClick={() => setPriority("high")}
            >
                High
            </button>

        </div>
        
        </>

    )
    
}

export default PriorityFilter
