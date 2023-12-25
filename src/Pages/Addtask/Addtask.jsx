import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, Swal } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Addtask = () => {
  const { SubmitData, register } = useForm();
  const { user } = useContext(AuthContext);
  const handleAddtask = (taskData) => {
    const { title, deadline, description, priority, category } = taskData;
    const email = user?.email;
    const status = "to-do";
    const NewtaskData = {
      title,
      priority,
      category,
      status,
      email,
      deadline,
      description,
    };
    console.log(NewtaskData);
    fetch("http://localhost:5000/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NewtaskData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Task Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="card w-full max-w-md shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleAddtask(SubmitData)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task TiTle</span>
          </label>
          <input
            {...register("title")}
            className="input input-bordered"
            required
            placeholder="name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Type</span>
          </label>
          <input
            {...register("category")}
            className="input input-bordered"
            required
            placeholder="type"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select
            {...register("priority")}
            className="select select-bordered"
            required
            placeholder="options"
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            {...register("deadline")}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered"
            required
            placeholder="description"
          />
        </div>

        <button
          type="submit"
          className="btn bg-[#001C30] text-white hover:text-black hover:bg-gray-400 mt-4"
        >
          Add Task
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Addtask;
