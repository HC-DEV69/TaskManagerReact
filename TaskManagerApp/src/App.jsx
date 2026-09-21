import { useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Statistics from "./components/Statistics.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {

    const [filter, setFilter] = useState("all");

    return (
        <div className="app">

            <Header />

            <main className="container">

                <Statistics />

                <TaskForm />

                <FilterBar filter={filter} setFilter={setFilter} />

                <TaskList filter={filter}/>

            </main>

        </div>
    );
}

export default App;