import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const TaskShow = ({ task }) => {
  const { _id, title, deadline, description, priority, category } = task;
  console.log(task);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(
        `https://task-management-server-mu-gules.vercel.app/addtask/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Task Deleted Successfully");
          }
        });

      if (result.isConfirmed) {
        toast("Deleted!");
      }
    });
  };

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
          <div className="card-actions">
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default TaskShow;
