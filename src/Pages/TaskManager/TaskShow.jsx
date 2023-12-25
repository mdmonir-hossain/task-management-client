

const TaskShow = ({ task }) => {
    const { title, deadline, description, priority, category } = task;
    console.log(task);
    return (
      <div>
        <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    
            <h2 className="card-title">Title: {title}</h2>
            <p>Category: {category}</p>
            <div className="card-actions justify-center">
              <h2 className="card-title">Description: {description}</h2>
              <h2 className="card-title">Priority: {priority}</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TaskShow;
