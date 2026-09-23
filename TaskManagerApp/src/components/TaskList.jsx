import { useMemo } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";

function TaskList({ filter , priority, search, sortBy}) {

    const { state } = useTasks();


    const filteredTasks = useMemo(() => {

        if (filter === "pending") {

            return state.tasks.filter(
                task => !task.completed
            );

        }

        if (filter === "completed") {

            return state.tasks.filter(
                task => task.completed
            );

        }

        return state.tasks;

    }, [state.tasks, filter]);
    

    const priorityTasks = useMemo(() => {

        if (priority === "low") {

            return filteredTasks.filter(
                task => task.priority.toLowerCase() === "low"
            );

        }

        if (priority === "medium") {

            return filteredTasks.filter(
                task => task.priority.toLowerCase() === "medium"
            );

        }

        if (priority === "high") {

            return filteredTasks.filter(
                task => task.priority.toLowerCase() === "high"
            );
            
        }

        return filteredTasks

    }, [filteredTasks, priority]);



    const searchedTasks = useMemo(() =>{
        return priorityTasks.filter(

            task=> task.title.toLowerCase().includes(search.toLowerCase())

        )}, [priorityTasks, search] )

    const sortedTasks = useMemo(() =>{

        const tasksCopy = [...searchedTasks];

        if(sortBy === "newest"){

            return tasksCopy.sort((a,b)=> b.id - a.id)

        }

        if(sortBy === "oldest"){

            return tasksCopy.sort((a,b)=> a.id - b.id)

        }

        if(sortBy === "high priority"){
            const priorityRank = {high : 0, medium : 1, low : 2};
            return tasksCopy.sort((a,b)=>priorityRank[a.priority.toLowerCase()] - priorityRank[b.priority.toLowerCase()])

        }

        if(sortBy === "alphabetical"){
            return tasksCopy.sort((a,b)=> a.title.localeCompare(b.title));
        }

        return tasksCopy;        

    }, [searchedTasks, sortBy] )

    return (
        <section className="task-list">

            <h2>Tasks</h2>

            {priorityTasks.length === 0 ? (

                <p className="empty">
                    No tasks found.
                </p>

            ) : (

                sortedTasks.map(task => (

                    <TaskItem
                        key={task.id}
                        task={task}
                    />

                ))

            )}

        </section>
    );
}

export default TaskList;