const User = () => {
  return (
    <div className="bg-[#001C30] text-white">
      <h1 className="text-center  text-2xl font-extrabold">
        Task Manager User
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 bg-[#F7D8A3] text-black">
        <div>
          <div className="card  card-compact  shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/6r88S85/developer.jpg"
                alt="Developer"
                className="w-[100px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Developer</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card  card-compact  shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/p2cH9t9/banker.jpg"
                alt="Developer"
                className="w-[100px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Banker</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact  shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/WGFNQ4W/corporate.jpg"
                alt="Developer"
                className="w-[100px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Corporate Professionals</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
