const LoadingComponent = () => {
  return (
    <div
      className="w-screen h-screen bg-white fixed flex flex-col justify-center items-center"
      style={{ zIndex: "9999", overflow: "hidden" }}
    >
      <img
        className="loading-fade"
        width={"140"}
        height={"140"}
        src={"/icons/apple-touch-icon-180x180.png"}
        alt="Oxygen loading icon"
      />
    </div>
  );
};

export default LoadingComponent;
