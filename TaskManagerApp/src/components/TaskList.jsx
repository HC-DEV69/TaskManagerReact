import { useMemo } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";

function TaskList({ filter }) {

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

    return (
        <section className="task-list">

            <h2>Tasks</h2>

            {filteredTasks.length === 0 ? (

                <p className="empty">
                    No tasks found.
                </p>

            ) : (

                filteredTasks.map(task => (

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