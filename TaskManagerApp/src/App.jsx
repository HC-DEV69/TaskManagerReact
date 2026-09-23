import { useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Statistics from "./components/Statistics.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import PriorityFilter from "./components/PriorityFilter.jsx";
import SortFilter from "./components/SortFilter.jsx"

function App() {

    const [filter, setFilter] = useState("all");
    const [priority, setPriority] = useState("all");
    const [search, setSearch ] = useState("");
    const [sortBy, setSort] = useState("oldest");
    

    return (
        <div className="app">

            <Header />

            <main className="container">

                <Statistics />

                <TaskForm />

                <SearchBar setSearch={setSearch}/>

                <div className="filters">

                <FilterBar filter={filter} setFilter={setFilter} />

                <PriorityFilter priority={priority} setPriority={setPriority}></PriorityFilter>

                </div>

                <SortFilter sortBy={sortBy} setSort={setSort}></SortFilter>


                <TaskList filter={filter} search={search} priority={priority} sortBy={sortBy} />

            </main>

        </div>
    );
}

export default App;