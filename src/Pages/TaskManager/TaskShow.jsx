

const TaskShow = ({ task }) => {
    const { title, deadline, description, priority, category } = task;
    console.log(task);
    return (
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex gap-4">
              <div>Title: {title}</div>
              <div>Deadline: {deadline}</div>
            </div>
            <div className="flex gap-4">
              <div>Description:{description}</div>
            </div>
            <div className="flex gap-4">
              <div>Priority: {priority}</div>
              <div>Category: {category}</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TaskShow;
