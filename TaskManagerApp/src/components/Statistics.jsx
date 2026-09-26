import { useMemo } from "react";
import { useTasks } from "../context/TaskContext.jsx";

function Statistics() {

    const { state } = useTasks();

    const statistics = useMemo(() => {

        const total = state.tasks.length;

        const completed = state.tasks.filter(
            task => task.completed
        ).length;

        const pending = total - completed;

        const highPriority = state.tasks.filter(
            task => task.priority === "High"
        ).length;

        const completionPercentage =
            total === 0
                ? 0
                : Math.round((completed / total) * 100);

        return {
            total,
            completed,
            pending,
            highPriority,
            completionPercentage
        };

    }, [state.tasks]);

    return (
        <section className="statistics">

            <div className="stat">
                <h3>{statistics.total}</h3>
                <p>Total Tasks</p>
            </div>

            <div className="stat">
                <h3>{statistics.completed}</h3>
                <p>Completed</p>
            </div>

            <div className="stat">
                <h3>{statistics.pending}</h3>
                <p>Pending</p>
            </div>

            <div className="stat">
                <h3>{statistics.highPriority}</h3>
                <p>High Priority</p>
            </div>


            <div className="stat">
                <h3>{statistics.completionPercentage}%</h3>
                <p>Completion</p>
            </div>

        </section>
    );
}

export default Statistics;