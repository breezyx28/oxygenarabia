const Subscribe = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="w-[60%] h-[40vh] text-white rounded-[2rem] bg-slate-700 shadow-lg">
        <div className="w-full h-full flex flex-col gap-y-6 justify-center items-start px-[4rem]">
          <div className="head-text text-4xl font-extrabold capitalize">
            join <span className="text-blue-600">oxygen</span> family
          </div>
          <div className="content w-full">
            <div className="form-control">
              <label className="input-group">
                <span className="text-slate-800">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
