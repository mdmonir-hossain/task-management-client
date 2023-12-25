import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import TaskShow from "./TaskShow";

const TaskManager = () => {
  const [task, setTask] = useState([]);

  const { user } = useContext(AuthContext);

  const mytaskData = useLoaderData([]);

  useEffect(() => {
    const taskData = mytaskData.filter((task) => task.email === user.email);
    setTask(taskData);
  }, [mytaskData, user.email]);
  return (
    <div className=" min-h-screen bg-[#F7D8A3]">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          To Do
          <div>
            {task.length ? (
              ""
            ) : (
              <div>
                <h1 className="text-center text-3xl font-bold mt-10 text-red-600">
                  No Data Found
                </h1>
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 mt-10 mb-10">
              {task?.map((task) => (
                <TaskShow key={task._id} task={task}></TaskShow>
              ))}
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          Ongoing
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          Completed
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
