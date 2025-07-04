import "../App.css";
const Tasks = () => {
  return (
    <>
      <div className="tasks">
        <div className="task-input">
          <input type="text" placeholder="Enter task..." />
          <button>+</button>
        </div>
      </div>
    </>
  );
};

export default Tasks;
