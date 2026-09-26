import { memo, useCallback } from "react";
import { useTasks } from "../context/TaskContext.jsx";

function TaskItem({ task }) {

    const { dispatch } = useTasks();

    const toggleTask = useCallback(() => {

        dispatch({
            type: "TOGGLE_TASK",
            payload: task.id
        });

    }, [dispatch, task.id]);

    const editTask = useCallback(() => {

        dispatch({
            type: "SET_CURRENT_TASK",
            payload: task
        });

    }, [dispatch, task]);

    const deleteTask = useCallback(() => {

        dispatch({
            type: "DELETE_TASK",
            payload: task.id
        });

    }, [dispatch, task.id]);

    return (
        <article className="task-card">

            <div className="task-content">

                <h3 className={task.completed ? "completed" : ""}>
                    {task.title}
                </h3>

                <p>
                    {task.description}
                </p>

                <div className="task-info">

                    <span>
                        Priority: {task.priority}
                    </span>

                    <span>
                        Assigned: {task.assignee}
                    </span>

                </div>     

                <div className="gap"></div>

                <div className="task-info">


                 <span>
                    Due Date: {task.dueOn}
                 </span>

                </div>               

            </div>

            <div className="task-actions">

                <button onClick={toggleTask}>

                    {task.completed
                        ? "Undo"
                        : "Complete"}

                </button>

                <button
                    className="edit"
                    onClick={editTask}
                >
                    Edit
                </button>

                <button
                    className="delete"
                    onClick={deleteTask}
                >
                    Delete
                </button>

            </div>

        </article>
    );
}

export default memo(TaskItem);