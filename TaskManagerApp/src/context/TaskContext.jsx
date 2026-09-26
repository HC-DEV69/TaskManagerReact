import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const date = new Date();

const dueDate = new Date();

dueDate.setDate(date.getDate() + 5);

const initialState = {

    tasks: [
        {
            id:1,
            title: "Complete React Project",
            description: "Build task management application",
            priority: "High",
            assignee: "Sumit",
            completed: false,
            dueOn: dueDate.toLocaleDateString()
        },
        {
            id: 2,
            title: "Prepare SQL queries",
            description: "Practice joins and subqueries",
            priority: "Medium",
            assignee: "Rahul",
            completed: true,
            dueOn: dueDate.toLocaleDateString()
        }
        ,
        {
            id: 3,
            title: "Test the Functionality",
            description: "Test the features and UI of the Taskmanager App",
            priority: "High",
            assignee: "Rahul",
            completed: false,
            dueOn: dueDate.toLocaleDateString()
        }
    ],
    currentTask: null
}

function taskReducer(state, action){
    switch (action.type){
        
        case "ADD_TASK":
            
            return {
                ...state,
                tasks:[
                    ...state.tasks,
                    action.payload
                ]
            };

        case "DELETE_TASK" :

            return {

                ...state,
                tasks: state.tasks.filter(
                    task => task.id !== action.payload
                )
                
            };

        case "TOGGLE_TASK" :

            return {
                ...state,
                tasks: state.tasks.map(
                    task=> task.id === action.payload
                    ? {
                        ...task,
                        completed : !task.completed
                    }
                    : task
                )
            };

        case "SET_CURRENT_TASK" :

            return {
                ...state,
                currentTask: action.payload
            };

        case "UPDATE_TASK":

            return {
                ...state,
                tasks: state.tasks.map(
                    task=> task.id === action.payload.id ? action.payload : task
                ),
                currentTask : null
            };
        
        default : 
                return state;

    }
}

export function TaskProvider({children}){

    const [state,dispatch] = useReducer(taskReducer,initialState);

    return (
        <TaskContext.Provider value={{  state, dispatch  }}>
            {children}
        </TaskContext.Provider>
    );

}

export function useTasks(){

    return useContext(TaskContext);
}