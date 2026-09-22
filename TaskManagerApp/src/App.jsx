import { useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Statistics from "./components/Statistics.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {

    const [filter, setFilter] = useState("all");
    const[search, setSearch ] = useState("");
    

    return (
        <div className="app">

            <Header />

            <main className="container">

                <Statistics />

                <TaskForm />

                <SearchBar setSearch={setSearch}/>

                <FilterBar filter={filter} setFilter={setFilter} />

                <TaskList filter={filter} search={search}/>

            </main>

        </div>
    );
}

export default App;