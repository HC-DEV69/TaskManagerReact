import { useState, useCallback, useEffect } from "react";
import { useTasks } from "../context/TaskContext.jsx";

function TaskForm() {

    const { state, dispatch } = useTasks();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [assignee, setAssignee] = useState("");   

    

    useEffect(() => {

        if(state.currentTask){

            setTitle(state.currentTask.title),
            setDescription(state.currentTask.description),
            setPriority(state.currentTask.priority),
            setAssignee(state.currentTask.assignee)
        }
    }, [state.currentTask])


    const handleSubmit = useCallback((event) => {

        event.preventDefault();

        if (!title.trim() || !assignee.trim()) {
            alert("Please enter task title and assignee");
            return;
        }

        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 5);

    
        if(state.currentTask){

            const updatedTask = {

                ...state.currentTask,
                title,
                description,
                priority,
                assignee
            };
            dispatch({ type: "UPDATE_TASK", payload: updatedTask});
            
        }

        else{


        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            assignee,
            completed: false,
            dueOn : dueDate.toLocaleDateString()
        };        

        dispatch({
            type: "ADD_TASK",
            payload: newTask
        });

    }

        setTitle("");
        setDescription("");
        setPriority("Medium");
        setAssignee("");

    }, [title, description, priority, assignee, dispatch, state.currentTask]);

    

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
                    {state.currentTask ? "Save Changes" : "Add Task"}
                </button>

            </form>

        </section>
    );
}

export default TaskForm;