import { useMemo } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";

function TaskList({ filter , priority,search}) {

    const { state } = useTasks();

    console.log(state.tasks[0])

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

    return (
        <section className="task-list">

            <h2>Tasks</h2>

            {priorityTasks.length === 0 ? (

                <p className="empty">
                    No tasks found.
                </p>

            ) : (

                searchedTasks.map(task => (

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