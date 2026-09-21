import { useState, useCallback } from "react";
import { useTasks } from "../context/TaskContext.jsx";

function TaskForm() {

    const { dispatch } = useTasks();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [assignee, setAssignee] = useState("");

    const handleSubmit = useCallback((event) => {

        event.preventDefault();

        if (!title.trim() || !assignee.trim()) {
            alert("Please enter task title and assignee");
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            assignee,
            completed: false
        };

        dispatch({
            type: "ADD_TASK",
            payload: newTask
        });

        setTitle("");
        setDescription("");
        setPriority("Medium");
        setAssignee("");

    }, [title, description, priority, assignee, dispatch]);

    return (
        <section className="card">

            <h2>Add New Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Task description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <select
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <input
                    type="text"
                    placeholder="Assign to"
                    value={assignee}
                    onChange={e => setAssignee(e.target.value)}
                />

                <button type="submit">
                    Add Task
                </button>

            </form>

        </section>
    );
}

export default TaskForm;